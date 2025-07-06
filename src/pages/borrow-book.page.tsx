import { BorrowForm } from '@/components/features';
import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const BorrowBookPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-285px)]">
      <div className="card w-full max-w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <FaShoppingBag />
            Borrow Book
          </h2>
          <BorrowForm />
        </div>
      </div>
    </div>
  );
};

export default BorrowBookPage;
