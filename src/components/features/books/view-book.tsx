import { useGetBookQuery } from '@/api';
import { ErrorCard, LoadingSkeleton, NoDataCard } from '@/components/ui';
import React from 'react';
import { FaBook, FaShoppingBag } from 'react-icons/fa';
import { useParams } from 'react-router';

const ViewBook = () => {
  const params = useParams();

  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBookQuery(params.id ?? '');

  if (isLoading) return <LoadingSkeleton />;
  if (isError || error) {
    return <ErrorCard />;
  }

  if (isSuccess) {
    const data = book.data;

    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-285px)] bg-base-200">
        <div className="card w-full max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl gap-2">
              <FaBook />
              {data.title}
            </h2>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Author:</span> {data.author}
              </p>
              <p>
                <span className="font-semibold">Genre:</span> {data.genre}
              </p>
              <p>
                <span className="font-semibold">ISBN:</span> {data.isbn}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{' '}
                {data.description}
              </p>
              <p>
                <span className="font-semibold">Availability:</span>{' '}
                <span
                  className={`badge w-20 text-xs text-white ${
                    data.available ? 'badge-success' : 'badge-error'
                  }`}
                >
                  {data.available ? 'Available' : 'Unavailable'}
                </span>
              </p>
              <p>
                <span className="font-semibold">Copies:</span> {data.copies}
              </p>
              <p>
                <span className="font-semibold">Created At:</span>{' '}
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Updated At:</span>{' '}
                {new Date(data.updatedAt).toLocaleDateString()}
              </p>

              <button
                className="btn btn-primary w-full"
                disabled={!data.available || data.copies < 1}
              >
                <FaShoppingBag /> Borrow Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <NoDataCard />;
};

export default ViewBook;
