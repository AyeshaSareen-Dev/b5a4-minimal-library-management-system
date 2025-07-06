import {
  type APIResponse,
  type BookResponse,
  type BorrowResponse,
  type BorrowSummaryResponse,
  BookFilterValidator,
  BookValidator,
  BorrowValidator,
  UpdateBookValidatorWithID,
} from '@/lib';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type z from 'zod';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ['Book', 'Borrow', 'BorrowSummary'],
  endpoints: (builder) => ({
    getBooks: builder.query<
      APIResponse<BookResponse[]>,
      z.infer<typeof BookFilterValidator>
    >({
      query: (params) => ({
        url: '/books',
        params,
      }),
      providesTags: ['Book'],
    }),

    getBook: builder.query<APIResponse<BookResponse>, string>({
      query: (id) => `/books/${id}`,
      providesTags: ['Book'],
    }),

    createBook: builder.mutation<APIResponse<BookResponse>, z.infer<typeof BookValidator> >({
      query: (book) => ({
        url: '/books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Book'],
    }),

    updateBook: builder.mutation<
      APIResponse<BookResponse>,
      z.infer<typeof UpdateBookValidatorWithID>
    >({
      query: (book) => ({
        url: `/books/${book._id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ['Book'],
    }),

    deleteBook: builder.mutation<APIResponse<BookResponse>, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),

    borrowBook: builder.mutation<APIResponse<BorrowResponse>, z.infer<typeof BorrowValidator> >({
      query: (book) => ({
        url: '/borrow',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Book', 'Borrow', 'BorrowSummary'],
    }),

    getBorrowSummary: builder.query<APIResponse<BorrowSummaryResponse[]>, void>({
      query: () => '/borrow',
      providesTags: ['BorrowSummary'],
    })
  }),
});

export const { useGetBooksQuery, useDeleteBookMutation, useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery
 } =
  apiSlice;
