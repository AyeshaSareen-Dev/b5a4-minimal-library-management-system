import { ViewBook } from '@/components/features';
import { FaBook } from 'react-icons/fa';

const ViewBookPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex items-center gap-2 text-2xl font-bold">
        <FaBook />
        Book Details
      </h3>
      <ViewBook />
    </div>
  );
};

export default ViewBookPage;
