import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact-icons';

const ContactIcons = (props) => (
  <div className={`${props.className} flex`}>
    {data.map((s) => (
      <a className='first:ml-0 first:pl-0 px-2 text-gray-400 hover:text-blue-900' key={s.label} href={s.link}>
        <FontAwesomeIcon icon={s.icon} />
      </a>
    ))}
  </div>
);

export default ContactIcons;