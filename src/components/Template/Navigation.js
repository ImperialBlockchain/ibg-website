import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className='w-full'>
    <div className='flex flex-wrap px-4 lg:px-20 mx-auto my-4 flex-row justify-between'>
      <h1 className='w-2/5 my-3 text-lg'>
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className='w-2/5 sm:my-3 justify-end flex'>
        <ul className='sm:flex hidden'>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label} className='mr-4'>
              <Link to={l.path} className='hover:text-blue-600'>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Hamburger className='w-1/12 flex justify-end sm:hidden' />
      </nav>
    </div>
  </header>
);

export default Navigation;