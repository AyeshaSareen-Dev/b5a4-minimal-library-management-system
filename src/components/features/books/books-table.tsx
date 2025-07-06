import { apiSlice, useDeleteBookMutation, useGetBooksQuery } from '@/api';
import { ErrorCard, LoadingSkeleton, NoDataCard } from '@/components/ui';
import {
  BookFilterValidator,
  type APIResponse,
  type BookResponse,
} from '@/lib';
import { FaEdit, FaEye, FaShoppingBag, FaTrash } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router';
import type z from 'zod';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import Pagination from '@/components/ui/pagination';

export default function BooksTable({
  showPagination = false,
}: {
  showPagination?: boolean;
}) {
  const [searchParams] = useSearchParams();
  const parsedQueries = BookFilterValidator.safeParse(searchParams);
  const fallbackQueries: z.infer<typeof BookFilterValidator> = {
    page: 1,
    limit: 10,
    sort: 'desc',
    sortBy: 'createdAt',
  };

  const queries = parsedQueries.error ? fallbackQueries : parsedQueries.data;

  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBooksQuery(queries);

  const [deleteBook] = useDeleteBookMutation();
  const dispatch = useDispatch<AppDispatch>();

  console.log('Books received', books);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError || error) {
    return <ErrorCard />;
  }

  const handleDelete = (id: string, title: string) => {
    withReactContent(Swal)
      .fire({
        title: 'Are you sure?',
        text: `Do you want to delete "${title}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          // Try to delete the book here
          const previousBooks = books?.data;
          dispatch(
            apiSlice.util.updateQueryData(
              'getBooks',
              queries,
              (draft: APIResponse<BookResponse[]>) => {
                draft.data = draft.data.filter((book) => book._id !== id);
              }
            )
          );

          try {
            await deleteBook(id).unwrap();
            toast.info('The book has been deleted!');
          } catch (err) {
            console.error('Book deletion error', err);

            dispatch(
              apiSlice.util.updateQueryData(
                'getBooks',
                queries,
                (draft: APIResponse<BookResponse[]>) => {
                  draft.data = previousBooks ?? [];
                }
              )
            );
            toast.error('Failed to delete the book.');
          }
        }
      });
  };

  if (isSuccess) {
    const data = books.data;

    if (data.length < 1) {
      return <NoDataCard />;
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="overflow-x-auto min-h-[calc(100vh-285px)]">
          <table className="table w-full table-xs">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>ISBN</th>
                <th>Copies</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.isbn}</td>
                  <td>{book.copies}</td>
                  <td>
                    <span
                      className={`badge w-20 text-white text-xs ${
                        book.available ? 'badge-success' : 'badge-error'
                      }`}
                    >
                      {book.available ? 'Available' : 'Unavailable'}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link
                        to={`/books/${book._id}`}
                        className="btn btn-sm btn-info text-white"
                      >
                        <FaEye />
                        View
                      </Link>
                      <Link
                        to={`/edit-book/${book._id}`}
                        className="btn btn-sm btn-warning text-white"
                      >
                        <FaEdit />
                        Edit
                      </Link>
                      <Link
                        to={`/borrow/${book._id}`}
                        className="btn btn-sm btn-primary text-white"
                      >
                        <FaShoppingBag />
                        Borrow
                      </Link>
                      <button
                        className="btn btn-sm btn-error text-white"
                        onClick={() => handleDelete(book._id, book.title)}
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="text-xs">
          Showing results {queries.page} of {books.metadata?.pageCount} - Total
          books: {books.metadata?.total ?? 0}
        </span>
        {showPagination && (
          <Pagination pageCount={books.metadata?.pageCount ?? 1} />
        )}
      </div>
    );
  }

  return <NoDataCard />;
}
