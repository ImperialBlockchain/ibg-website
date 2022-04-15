import React from 'react';
import heroVideo from '../assets/Hero_Video.mp4';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    title="Home"
    description="Blockchain-focused research/consulting/technology group. Analyze, research, create and Inspire."
  >
    <section className='h-[calc(100vh_-_5rem)]'>
      <div className='-z-10 absolute w-full sm:w-1/2 right-0 top-0'>
        <video className='absolute right-0 top-0' loop={true} muted={true} playsInline={true} autoPlay={true} poster=''>
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/*<!img alt='hero' className='bg-gray-400 w-full h-full' />*/}
      </div>
      <div className='h-full grid grid-cols-12 grid-rows-1 content-center px-4 lg:px-20'>
        <div className='col-start-1 col-end-13 sm:col-end-7 row-start-1 row-end-2 flex items-center'>
          <h1 className='text-6xl sm:text-7xl break all'>Welcome to Imperial Blockchain Group's Website</h1>
        </div>
      </div>
    </section>
    <section className='h-screen'>

    </section>
  </Main>
);

export default Index;