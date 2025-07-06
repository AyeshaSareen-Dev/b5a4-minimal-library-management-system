import { useMemo } from 'react';
import { Link, useLocation } from 'react-router';
import SiteLogo from './site-logo';

const Navbar = () => {
  const location = useLocation();

  const navLinks = useMemo(
    () => [
      { path: '/', title: 'Home' },
      { path: '/books', title: 'All Books' },
      { path: '/create-book', title: 'Add Book' },
      { path: '/borrow-summary', title: 'Borrow Summary' },
    ],
    []
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link?.path
                      ? 'active border-b-2 border-green-500 rounded-none font-bold'
                      : ''
                  }
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="flex gap-1">
          <SiteLogo />
          <h2 className="text-2xl font-bold">Minimal Library</h2>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={
                  location.pathname === link?.path
                    ? 'active border-b-2 border-green-500 rounded-none font-bold'
                    : ''
                }
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
