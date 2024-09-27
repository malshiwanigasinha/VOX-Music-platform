import React from "react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome, FaMusic, FaHeart, FaFire, FaListAlt } from "react-icons/fa"; // Icons for links

export const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-lg'>
      <div className='container mx-auto flex flex-col md:flex-row items-start justify-left'>
        {/* Download Links */}
        <div className='mr-10 mb-4 md:mb-0'>
          <h3 className='text-lg font-semibold'>Download Our App</h3>
          <div className='flex space-x-4 mt-2'>
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center bg-gray-700 p-2 rounded transition duration-200 hover:bg-gray-600 text-sm'
            >
              <FaGooglePlay size={20} className='mr-2' />
              Google Play
            </a>
            <a
              href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center bg-gray-700 p-2 rounded transition duration-200 hover:bg-gray-600 text-sm'
            >
              <FaAppStore size={20} className='mr-2' />
              App Store
            </a>
          </div>
        </div>

        {/* Home Section */}
        <div className='mr-10 mb-4 md:mb-0'>
          <h3 className='text-lg font-semibold'>Home</h3>
          <ul className='space-y-2 mt-2'>
            <li>
              <Link to='/trending' className='flex items-center hover:text-gray-300'>
                <FaFire className='mr-2' /> Trending
              </Link>
            </li>
            <li>
              <Link to='/new' className='flex items-center hover:text-gray-300'>
                <FaListAlt className='mr-2' /> New
              </Link>
            </li>
          </ul>
        </div>

        {/* Browse Section */}
        <div className='mr-10 mb-4 md:mb-0'>
          <h3 className='text-lg font-semibold'>Browse</h3>
          <button
            className='bg-blue-600 p-3 rounded-lg transition duration-200 hover:bg-blue-500 text-sm'
            onClick={() => window.location.href = '/browse'}
          >
            Browse Music
          </button>
        </div>

        {/* Playlists Section */}
        <div className='mr-10 mb-4 md:mb-0'>
          <h3 className='text-lg font-semibold'>Playlists</h3>
          <ul className='space-y-2 mt-2'>
            <li>
              <Link to='/my-favourite' className='flex items-center hover:text-gray-300'>
                <FaHeart className='mr-2' /> My Favourite
              </Link>
            </li>
            <li>
              <Link to='/trending' className='flex items-center hover:text-gray-300'>
                <FaFire className='mr-2' /> Trending
              </Link>
            </li>
            <li>
              <Link to='/new' className='flex items-center hover:text-gray-300'>
                <FaListAlt className='mr-2' /> New
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Additional Links */}
      <div className='container mx-auto text-center mt-4 ju'>
        <p className='text-sm'>About | Contact | Legal | Policy</p>
        <span className='text-gray-400 text-sm'>
          © 2024 VOX. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
