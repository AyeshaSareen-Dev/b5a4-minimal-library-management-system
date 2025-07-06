import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router';

interface Props {
  pageCount?: number;
}

const Pagination = ({ pageCount = 1 }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useMemo(
    () => Number(searchParams.get('page') ?? 1),
    [searchParams]
  );
  return (
    <div className="join self-center">
      <button
        className="join-item btn"
        disabled={page < 2}
        onClick={() =>
          setSearchParams({
            page: String(page - 1),
          })
        }
      >
        «
      </button>
      <button className="join-item btn">
        Page {page}/{pageCount}
      </button>
      <button
        className="join-item btn"
        disabled={page >= pageCount}
        onClick={() =>
          setSearchParams({
            page: String(page + 1),
          })
        }
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
