import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const Footer = () => (
  <section className='lg:max-w-screen-lg px-4 py-2 lg:px-20' >
    <ContactIcons /><p>&copy; Imperial Blockchain Group <Link to="/" className='textLink'>Website URL</Link>.</p>
  </section>
);
export default Footer;