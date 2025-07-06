import {
  apiSlice,
  useGetBookQuery,
  useGetBooksQuery,
  useUpdateBookMutation,
} from '@/api';
import { ErrorCard, LoadingSkeleton, NoDataCard } from '@/components/ui';
import {
  BookFilterValidator,
  BookValidator,
  type APIResponse,
  type BookResponse,
} from '@/lib';
import type { AppDispatch } from '@/store';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import type z from 'zod';
import BookFormFragment from './book-form-fragment';

const BookUpdateForm = () => {
  const params = useParams();
  const id = params.id;
  const {
    data: book,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetBookQuery(id ?? '');

  const { data: books, isLoading: areBooksLoading } = useGetBooksQuery({
    page: 1,
    limit: 10,
    sort: 'desc',
    sortBy: 'createdAt',
  } satisfies z.infer<typeof BookFilterValidator>);

  const navigate = useNavigate();

  const [updateBook] = useUpdateBookMutation();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = useCallback(
    async (values: z.infer<typeof BookValidator>) => {
      // Optimistically create the book
      const oldBooks = books?.data || [];

      dispatch(
        apiSlice.util.updateQueryData(
          'getBooks',
          { page: 1, limit: 10, sort: 'desc', sortBy: 'createdAt' },
          (draft: APIResponse<BookResponse[]>) => {
            draft.data = oldBooks.map((b) => {
              if (b._id === id) {
                return {
                  ...values,
                  _id: id ?? '',
                  _v: 0,
                  createdAt: b.createdAt,
                  updatedAt: new Date().toISOString(),
                };
              }
              return b;
            });
          }
        )
      );

      try {
        updateBook({ ...values, _id: id ?? '' })
          .unwrap()
          .then(() => {
            toast.success('The book has been updated!');
          });
        navigate('/books');
      } catch (err) {
        dispatch(apiSlice.util.resetApiState());
        toast.error('The book has not been updated!');
        console.error('Book creation error', err);
      }
    },
    [books?.data, dispatch, id, updateBook, navigate]
  );

  if (isLoading) return <LoadingSkeleton />;
  if (isError || error) return <ErrorCard />;

  if (isSuccess) {
    const data = book.data;
    return (
      <BookFormFragment
        disabled={areBooksLoading}
        data={data}
        handleSubmit={onSubmit}
      />
    );
  }

  return <NoDataCard />;
};

export default BookUpdateForm;
