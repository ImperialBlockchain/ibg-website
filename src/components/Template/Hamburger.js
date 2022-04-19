import React, { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import ContactIcons from '../Contact/ContactIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart } from '@fortawesome/free-regular-svg-icons/faBarChart';
import { faTimesRectangle } from '@fortawesome/free-regular-svg-icons/faTimesRectangle';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={props.className}>
      {/*z-index is set to the value to be over the navigation*/} 
      <nav className='z-[1200] absolute text-yellow-500'>
        <ul>
          {open ? (
            <li className="menu close-menu p-2 my-4">
              <div onClick={() => setOpen(!open)} className="menu-hover"><FontAwesomeIcon icon={faTimesRectangle} /></div>
            </li>
          ) : (
            <li className="menu open-menu p-2 my-4">
              <div onClick={() => setOpen(!open)} className="menu-hover"><FontAwesomeIcon icon={faBarChart} /></div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu
          stack
          right
          noOverlay
          width={'100%'}
          isOpen={open}
          customBurgerIcon={false}
          customCrossIcon={false}
          disableAutoFocus
        >
          <div className='absolute top-16 '>
            <ul>
              {routes.filter((l) => l.navigation || l.homepage || l.login || l.signup).map((l) => (
                <li key={l.label}>
                  <Link to={l.path} onClick={() => setOpen(!open)}>
                    <h3 className={`${l.index && 'index-li'} hover:text-blue-500 hover:underline text-xl`}>{l.label}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <ContactIcons className='mt-6' />
          </div>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;