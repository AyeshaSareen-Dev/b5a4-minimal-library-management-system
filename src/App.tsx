import { StrictMode, useEffect } from 'react';
import { themeChange } from 'theme-change';
import { RouterProvider } from 'react-router';
import { AppRoutes } from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    themeChange(true);
  }, []);

  return (
    <StrictMode>
      <RouterProvider router={AppRoutes} />
      <ToastContainer />
    </StrictMode>
  );
}

export default App;
