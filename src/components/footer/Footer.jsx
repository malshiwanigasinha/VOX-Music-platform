import React from "react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

export const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-3'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Download Links */}
        <div className='mb-2 md:mb-0'>
          <h3 className='text-sm font-semibold'>Download Our App</h3>
          <div className='flex space-x-2 mt-1'>
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center bg-gray-600 p-1 rounded transition duration-200 hover:bg-gray-500 text-xs'
            >
              <FaGooglePlay size={16} className='mr-1' />
              Google Play
            </a>
            <a
              href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center bg-gray-600 p-1 rounded transition duration-200 hover:bg-gray-500 text-xs'
            >
              <FaAppStore size={16} className='mr-1' />
              App Store
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='mb-2 md:mb-0'>
          <h3 className='text-sm font-semibold'>Quick Links</h3>
          <ul className='space-y-1 mt-1 text-xs'>
            <li>
              <Link to='/' className='hover:text-gray-300'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/browse' className='hover:text-gray-300'>
                Browse
              </Link>
            </li>
            <li>
              <Link to='/playlists' className='hover:text-gray-300'>
                Playlists
              </Link>
            </li>
            <li>
              <Link to='/artists' className='hover:text-gray-300'>
                Artists
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Additional Links */}
      <div className='text-center mt-2'>
        <p className='text-xs'>About | Contact | Legal | Policy</p>
        <span className='text-gray-500 text-xs'>© 2024 Your Company Name. All rights reserved.</span>
      </div>
    </footer>
  );
};
