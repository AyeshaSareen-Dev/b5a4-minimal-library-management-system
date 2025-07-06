import { apiSlice, useCreateBookMutation, useGetBooksQuery } from '@/api';
import { BookFilterValidator, BookValidator, type APIResponse, type BookResponse } from '@/lib';
import type { AppDispatch } from '@/store';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import type z from 'zod';
import BookFormFragment from './book-form-fragment';

const BookForm = () => {
  const {
    data: books,
    isLoading,
  } = useGetBooksQuery({
    page: 1,
    limit: 10,
    sort: 'desc',
    sortBy: 'createdAt',
  } satisfies z.infer<typeof BookFilterValidator>);

  const navigate = useNavigate();

  const [creteBook] = useCreateBookMutation()
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
              draft.data = [{...values, _id: Date.now().toString(), _v: 0, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()}, ...oldBooks];
            }
          )
        );

        try {
          creteBook(values).unwrap().then(() => {
            toast.success('The book has been created!');
          });
          navigate('/books');
        } catch (err) {
          dispatch(apiSlice.util.resetApiState());
          toast.error('The book has not been created!');
          console.error('Book creation error', err);
        }
    },
    [books?.data, creteBook, dispatch, navigate]
  );

  return (
    <BookFormFragment handleSubmit={onSubmit} disabled={isLoading}/>
  );
};

export default BookForm;
