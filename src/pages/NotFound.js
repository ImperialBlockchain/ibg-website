import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const NotFound = () => (
  <Main
    title="Error 404"
    description="Not found"
  >
    <section className='min-h-[calc(100vh_-_8rem)] flex justify-center items-center'>
      <div className='w-96 h-64 p-6'>
        <h1 className='text-4xl text-yellow-500'>404</h1>
        <h2>Error - Page Not Found</h2>
        <hr />
        <p>Please check the URL.</p>
        <p>Otherwise, <Link to='/' className='text-link'>click here</Link> to be returned to the homepage</p>
      </div>
    </section>
  </Main>
);

export default NotFound;