interface RouteMetadata {
  title: string;
  path: RegExp;
}

export default class AppRouteMeta {
  private static readonly routeMatchers: RouteMetadata[] = [
    {
      title: 'Home',
      path: /^\/$/,
    },
    {
      path: /^\/books$/,
      title: 'List of Books',
    },
    {
      path: /^\/create-book$/,
      title: 'Add Book',
    },
    {
      path: /^\/books\/[A-Fa-f0-9]{24}$/,
      title: 'View Book',
    },
    {
      path: /^\/edit-book\/[A-Fa-f0-9]{24}$/,
      title: 'Edit Book',
    },
    {
      path: /^\/borrow\/[A-Fa-f0-9]{24}$/,
      title: 'Borrow Book',
    },
    {
      path: /^\/borrow-summary$/,
      title: 'Borrow Summary',
    },
  ];

  static findRoute(pathname: string) {
    return this.routeMatchers.find((route) => route.path.test(pathname));
  }
}
