import { useGetBorrowSummaryQuery } from '@/api';
import { ErrorCard, LoadingSkeleton, NoDataCard } from '@/components/ui';

const BorrowSummaryTable = () => {
  const {
    data: borrowSummary,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBorrowSummaryQuery();

  if (isLoading) return <LoadingSkeleton />;
  if (isError || error) return <ErrorCard />;

  if (isSuccess) {
    if (borrowSummary.data.length < 1) return <NoDataCard />;
    return (
      <div className="overflow-x-auto min-h-[calc(100vh-285px)]">
        <table className="table w-full table-xs">
          <thead>
            <tr>
              <th>Title</th>
              <th>ISBN</th>
              <th>Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {borrowSummary.data.map((summary, index) => (
              <tr key={`${summary.book.isbn}-${index}`}>
                <td>{summary.book.title}</td>
                <td>{summary.book.isbn}</td>
                <td>{summary.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <NoDataCard />;
};

export default BorrowSummaryTable;
