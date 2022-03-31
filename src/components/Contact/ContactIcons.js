import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = (props) => (
  <ul className={`${props.className} flex`}>
    {data.map((s) => (
      <li key={s.label}>
        <a className='pr-2 mr-2 text-gray-400 hover:text-blue-900' href={s.link}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;