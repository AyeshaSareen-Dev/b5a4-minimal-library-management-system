import { BooksTable } from '@/components/features';
import { FaBookOpen } from 'react-icons/fa';

const BooksPage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="flex items-center gap-2 text-2xl font-bold">
        <FaBookOpen /> All Books
      </h3>
      <BooksTable showPagination />
    </div>
  );
};

export default BooksPage;
