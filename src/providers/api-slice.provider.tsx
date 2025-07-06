import { apiSlice } from '@/api';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ApiSliceProvider = ({ children }: Props) => {
  return <ApiProvider api={apiSlice}>{children}</ApiProvider>;
};

export default ApiSliceProvider;
