import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className='fixed z-30 w-full bg-gradient-to-r from-gray-500 to-gray-700 opacity-95'>
    <div className='flex flex-wrap px-4 lg:px-20 mx-auto flex-row justify-between'>
      {routes.filter((l) => l.homepage).map((l) => (
        <div className='w-3/5 my-4 text-2xl' key={l.label}>
          <Link to={l.path}>
            <img src={logo} className='w-12 inline pb-1' alt='logo' />
            <h1 className='inline font-bold'>{l.label}</h1>
          </Link>
        </div>
      ))}
      <nav className='w-2/5 sm:my-3 justify-end flex'>
        <ul className='sm:flex items-center hidden'>
          {routes.filter((l) => l.navigation).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>
                <div className='px-2 py-1 hover:underline hover:text-blue-500'>
                  {l.label}
                </div>
              </Link>
            </li>
          ))}
          {routes.filter((l) => l.login).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>
                <div className='mr-2 px-2 py-1 text-yellow-500 hover:underline'>
                  {l.label}
                </div>
              </Link>
            </li>
          ))}
          {routes.filter((l) => l.signup).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>
                <div className='px-2 py-1 text-slate-100 bg-rose-600 hover:bg-yellow-500'>
                  {l.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Hamburger className='flex justify-end sm:hidden' />
      </nav>
    </div>
  </header>
);

export default Navigation;