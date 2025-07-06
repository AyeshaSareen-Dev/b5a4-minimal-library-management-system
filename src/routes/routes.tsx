import { createBrowserRouter } from 'react-router';
import { RootLayout, ErrorLayout } from '../components/layout';
import { SiteLoading } from '@/components/ui';
import {
  BooksPage,
  BorrowBookPage,
  BorrowSummaryPage,
  CreateBookPage,
  EditBookPage,
  HomePage,
  ViewBookPage,
} from '@/pages';

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    HydrateFallback: SiteLoading,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/books',
        Component: BooksPage,
      },
      {
        path: '/create-book',
        Component: CreateBookPage,
      },
      {
        path: '/books/:id',
        Component: ViewBookPage,
      },
      {
        path: '/edit-book/:id',
        Component: EditBookPage,
      },
      {
        path: '/borrow/:bookId',
        Component: BorrowBookPage,
      },
      {
        path: '/borrow-summary',
        Component: BorrowSummaryPage,
      },
    ],
  },
]);
