import { BookUpdateForm } from '@/components/features';
import { FaEdit } from 'react-icons/fa';

const EditBookPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-285px)]">
      <div className="card w-full max-w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <FaEdit />
            Edit Book
          </h2>
          <BookUpdateForm />
        </div>
      </div>
    </div>
  );
};

export default EditBookPage;
