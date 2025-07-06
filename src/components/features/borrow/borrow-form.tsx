import { useParams } from 'react-router';
import { useGetBookQuery } from '@/api';
import { ErrorCard, LoadingSkeleton, NoDataCard } from '@/components/ui';
import BorrowFormFragment from './borrow-form-fragment';
import { cn } from '@/lib/utils';

const BorrowForm = () => {
  const params = useParams();
  const bookId = params.bookId;

  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBookQuery(bookId ?? '');

  if (isLoading) return <LoadingSkeleton />;
  if (isError || error) return <ErrorCard />;

  if (isSuccess) {
    const data = book.data;
    return (
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold">{data.title}</h4>
        <h5 className="text-lg font-semibold">{data.author}</h5>
        <div className="flex flex-wrap items-center gap-4">
          <span
            className={cn(
              'badge w-20 text-xs text-white',
              data.available ? 'badge-success' : 'badge-error'
            )}
          >
            {data.available ? 'Available' : 'Unavailable'}
          </span>
          <span className="text-xs badge badge-primary px-4">
            Copies: {data.copies}
          </span>
        </div>
        <BorrowFormFragment data={data} />
      </div>
    );
  }

  return <NoDataCard />;
};

export default BorrowForm;
