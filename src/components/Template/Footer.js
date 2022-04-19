import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const Footer = () => (
  <section className='px-4 lg:px-20 from-gray-100/10 to-gray-100/30 bg-gradient-to-r'>
    <div className='py-2'>
      <ContactIcons />
      <p className='text-sm'>&copy; Imperial Blockchain Group <Link to="/" className='text-link'>Website URL</Link>.</p>
    </div>
  </section>
);
export default Footer;