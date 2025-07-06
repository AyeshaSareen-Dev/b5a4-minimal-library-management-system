import { Link, useLocation } from 'react-router';
import SiteLogo from '@/components/ui/site-logo';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-base-100 shadow-sm px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex flex-col gap-2 items-center">
            {/* Logo */}
            <SiteLogo className={'h-20 w-28'} />

            {/* Company Name */}
            <h2 className="text-2xl font-bold">Minimal Library</h2>
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-medium text-xs">
            {[
              { path: '#about', linkTitle: 'About Us' },
              { path: '#privacy-policy', linkTitle: 'Privacy Policy' },
              { path: '#terms-conditions', linkTitle: 'Terms & Conditions' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path
                      ? 'border-b-2 border-green-500 font-bold text-green-600'
                      : 'hover:text-green-600'
                  }
                >
                  {link.linkTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4 mt-6">
          <Link to="https://www.facebook.com/Minimal Library" target="_blank">
            <FaFacebook size={24} />
          </Link>

          <Link to="https://www.instagram.com/Minimal Library/" target="_blank">
            <FaInstagram size={24} />
          </Link>

          <Link to="https://www.tiktok.com/@Minimal Library" target="_blank">
            <FaTiktok size={24} />
          </Link>
        </div>

        {/* Copyright Text */}
        <div className="mt-6 text-center text-sm ">
          © {new Date().getFullYear()} Minimal Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
