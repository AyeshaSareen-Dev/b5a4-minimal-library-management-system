import { BooksTable } from '@/components/features';
import React from 'react';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex items-center gap-2 text-2xl font-bold">
        <FaBookOpen /> New Books
      </h3>
      <BooksTable />
      <Link
        to="/books"
        className="text-white btn btn-primary w-fit self-center"
      >
        <FaExternalLinkAlt /> View All Books
      </Link>
    </div>
  );
};

export default HomePage;
