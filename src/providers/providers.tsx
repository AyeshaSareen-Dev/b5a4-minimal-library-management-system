import React from 'react';
import ScrollToTopProvider from './scroll-to-top.provider';
import SiteTitleProvider from './site-title.provider';
import ApiSliceProvider from './api-slice.provider';

interface Props {
  children: React.ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <ApiSliceProvider>
      <ScrollToTopProvider>
        <SiteTitleProvider>{children}</SiteTitleProvider>
      </ScrollToTopProvider>
    </ApiSliceProvider>
  );
};

export default Providers;
