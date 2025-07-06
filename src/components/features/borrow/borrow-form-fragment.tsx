import { BorrowValidator, type APIResponse, type BookResponse } from '@/lib';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiSlice, useBorrowBookMutation } from '@/api';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { z } from 'zod';
import { format } from 'date-fns';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const BorrowFormFragment = ({ data }: { data: BookResponse }) => {
  const form = useForm({
    defaultValues: {
      book: data._id,
      quantity: 1,
      dueDate: new Date().toISOString(),
    },
    disabled: !data.available || data.copies < 1,
    resolver: zodResolver(
      BorrowValidator.extend({
        quantity: z.coerce.number().min(1).max(data.copies).default(1),
      })
    ),
  });

  const [borrowBook] = useBorrowBookMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (values: z.infer<typeof BorrowValidator>) => {
      // Optimistically update the book
      const prevBook = data;
      dispatch(
        apiSlice.util.updateQueryData(
          'getBook',
          data._id,
          (draft: APIResponse<BookResponse>) => {
            draft.data.copies -= values.quantity;
            draft.data.available = draft.data.copies > 0;
          }
        )
      );

      try {
        await borrowBook(values).unwrap();
        toast.success('Book borrowed successfully!');
        navigate('/borrow-summary');
      } catch (err) {
        console.error('Book borrow error', err);
        dispatch(
          apiSlice.util.updateQueryData(
            'getBook',
            data._id,
            (draft: APIResponse<BookResponse>) => {
              draft.data = prevBook;
            }
          )
        );
      }
    },
    [borrowBook, data, dispatch, navigate]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <input
                  className="input input-primary"
                  type="number"
                  placeholder="eg: 1"
                  min={1}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <input
                  className="input input-primary"
                  type="date"
                  min={format(new Date(), 'yyyy-MM-dd')}
                  value={format(new Date(field.value), 'yyyy-MM-dd')}
                  onChange={(e) =>
                    field.onChange(new Date(e.target.value).toISOString())
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          disabled={!data.available || data.copies < 1}
          type="submit"
          className="btn btn-primary"
        >
          <FaPaperPlane /> Submit
        </button>
      </form>
    </Form>
  );
};

export default BorrowFormFragment;
