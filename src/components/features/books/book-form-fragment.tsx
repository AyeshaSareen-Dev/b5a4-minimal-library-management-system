import { BookValidator, type BookResponse } from '@/lib';
import { useCallback, useMemo } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaPaperPlane } from 'react-icons/fa';
import type z from 'zod';

interface Props {
  data?: BookResponse;
  disabled?: boolean;
  handleSubmit?: (values: z.infer<typeof BookValidator>) => void;
}

const BookFormFragment = ({ data, disabled = false, handleSubmit }: Props) => {
  const form = useForm({
    defaultValues: {
      title: data?.title ?? '',
      author: data?.author ?? '',
      copies: data?.copies ?? 1,
      available: data?.available ?? true,
      isbn: data?.isbn ?? '',
      description: data?.description ?? '',
      genre: data?.genre ?? undefined,
    },
    resolver: zodResolver(BookValidator),
    disabled,
  });

  const copies = form.watch('copies');

  const genreList = useMemo(
    () => [
      'FICTION',
      'NON_FICTION',
      'SCIENCE',
      'HISTORY',
      'BIOGRAPHY',
      'FANTASY',
    ],
    []
  );

  const onFormSubmit = useCallback(
    (values: z.infer<typeof BookValidator>) => {
      if (handleSubmit) {
        handleSubmit({ ...values, available: copies > 0 });
      } else {
        toast.warning('[Book Form Fragment] No submit handler provided');
      }
    },
    [handleSubmit, copies]
  );

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onFormSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <input
                  className="input input-primary"
                  placeholder="eg: The Lord of the Rings"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <input
                  className="input input-primary"
                  placeholder="eg: J. R. R. Tolkien"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="eg: Fantasy" />
                  </SelectTrigger>
                  <SelectContent>
                    {genreList.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre
                          .charAt(0)
                          .concat(
                            genre.slice(1).toLowerCase().split('_').join('-')
                          )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <input
                  className="input input-primary"
                  placeholder="eg: 978-3-16-148410-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <textarea
                  rows={4}
                  className="resize-none input input-primary"
                  placeholder="eg: Lorem ipsum dolor sit amet"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <input
                  className="input input-primary"
                  placeholder="eg: 10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="available"
          render={() => (
            <FormItem>
              <FormLabel>Available</FormLabel>
              <FormControl>
                <Select
                  disabled
                  // onValueChange={(val) => field.onChange(val === 'true')}
                  value={copies > 0 ? 'true' : 'false'}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="eg: Yes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
              {/* <div className="flex gap-2 text-xs items-center">
                <Checkbox
                  id="force-unavailable"
                  checked={forceUnavailable}
                  onCheckedChange={(chk) => {
                    if (chk === 'indeterminate') return;
                    if (chk) {
                      setForceUnavailable(true);
                      field.onChange(false);
                    } else {
                      setForceUnavailable(false);
                      field.onChange(copies > 0);
                    }
                  }}
                />
                <Label htmlFor="force-unavailable" className="text-xs">
                  Force Unavailable?
                </Label>
              </div> */}
            </FormItem>
          )}
        />

        <button
          className="btn btn-primary w-full"
          type="submit"
          disabled={disabled}
        >
          <FaPaperPlane />
          Submit
        </button>
      </form>
    </Form>
  );
};

export default BookFormFragment;
