import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Blockchain-focused research/consulting/technology group. Analyze, research, create and Inspire.'}
  >
    <section className='h-screen flex flex-col md:flex-row'>
      <div className='sm:w-1/2 w-full'>
        <h1 className='text-7xl'>Welcome to Imperial Blockchain Society's Website</h1>
      </div>
      <div className='sm:w-1/2 w-full'>
        <img />
      </div>
    </section>
  </Main>
);

export default Index;