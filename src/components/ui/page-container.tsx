import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <main className="min-h-[calc(100vh-285px)] max-w-7xl mx-auto px-4 py-6">
      {children}
    </main>
  );
};

export default PageContainer;
