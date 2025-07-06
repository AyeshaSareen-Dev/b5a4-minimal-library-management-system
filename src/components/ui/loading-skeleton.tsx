import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="w-full min-h-[calc(100vh-285px)] grow flex items-center justify-center">
      <span className="loading loading-infinity size-32"></span>
    </div>
  );
};

export default LoadingSkeleton;
