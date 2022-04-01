import React, { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import ContactIcons from '../Contact/ContactIcons';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={props.className}>
      <nav className='z-[1200] absolute hover:text-gray-400 hover:bg-gray-100 px-2 py-1 my-2'>
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <div className='absolute top-16'>
            <ul>
              {routes.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} onClick={() => setOpen(!open)}>
                    <h3 className={`${l.index && 'index-li'} hover:text-blue-600 text-xl`}>{l.label}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <ContactIcons className='mt-6'/>
          </div>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;