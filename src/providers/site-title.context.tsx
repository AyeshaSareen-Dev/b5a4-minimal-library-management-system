import { createContext, useContext } from 'react';

export const SiteTitleContext = createContext({
  siteTitle: 'Minimal Library',
});
export const useSiteTitle = () => useContext(SiteTitleContext);
