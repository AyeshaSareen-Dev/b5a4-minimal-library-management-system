import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { AppRouteMeta } from '../routes';

interface Props {
  children: React.ReactNode;
}

export default function SiteTitleProvider({ children }: Props) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    console.log('path', path);
    const routeMeta = AppRouteMeta.findRoute(path);
    console.log('routeMeta', routeMeta);

    document.title = `${routeMeta?.title ?? ''}${
      routeMeta?.title ? ' |' : ''
    } Minimal Library`;
  }, [location]);
  return <>{children}</>;
}
