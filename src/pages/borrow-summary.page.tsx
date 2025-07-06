import BorrowSummaryTable from '@/components/features/borrow/borrow-summary-table';
import { FaStickyNote } from 'react-icons/fa';

const BorrowSummaryPage = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="flex items-center gap-2 text-2xl font-bold">
        <FaStickyNote /> Borrow Summary
      </h3>
      <BorrowSummaryTable />
    </div>
  );
};

export default BorrowSummaryPage;
