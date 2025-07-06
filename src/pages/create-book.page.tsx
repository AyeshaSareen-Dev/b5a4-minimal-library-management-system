import { BookForm } from '@/components/features';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const CreateBookPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-285px)]">
      <div className="card w-full max-w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <FaPlus />
            Add Book
          </h2>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default CreateBookPage;
