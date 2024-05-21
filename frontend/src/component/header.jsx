import React, { useEffect, useRef, useContext, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
// import { Link } from '@chakra-ui/react';
import SectionContainer from './sectionContainer';

// import { AuthContext } from '../../context/AuthContext';

const nav__links = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/app',
    display: 'App',
  },
  {
    path: '/package',
    display: 'wisata',
  },
  {
    path: '/notifikasi',
    display: 'notifikasi',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  //sticky header
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  // toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <SectionContainer>
      {/* tambahni klo mau asbsolute => md:absolute z-50 top-0 */}
      <header class="bg-white  left-0 w-full">
        <div class="mx-auto w-full px-4 ">
          <div class="flex h-16 items-center justify-between">
            {/* LOGO */}
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-teal-600" href="#">
                <span class="sr-only">Home</span>
                <img src="/logo.png" />
              </a>
            </div>

            {/* MENU START */}
            <div class="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" class="hidden md:block">
                <ul class="flex md:flex-row items-center gap-6 text-sm ">
                  {nav__links.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path} className={(navClass) => (navClass.isActive ? ' text-black transition hover:text-gray-500/75' : 'text-gray-500 transition hover:text-gray-500/75')}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Menu Dropdown */}
              {menuOpen && (
                <nav className="md:hidden w-1/2 h-full absolute top-0 right-0 text-black bg-white z-40 border-l-2 border-black">
                  <ul className="flex flex-col items-center justify-center h-full gap-4 ">
                    {nav__links.map((item, index) => (
                      <li key={index}>
                        <NavLink to={item.path} className="text-gray-500 transition hover:text-gray-500/75">
                          {item.display}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div class="flex items-center gap-4">
                <div class="sm:flex sm:gap-4">
                  <Link class="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow" href="/login">
                    Login
                  </Link>

                  <div class="hidden sm:flex">
                    <Link class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="/register">
                      Register
                    </Link>
                  </div>
                </div>

                {/* TOGGLE MENU */}
                <div class="block md:hidden z-50">
                  <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
};

export default Header;
