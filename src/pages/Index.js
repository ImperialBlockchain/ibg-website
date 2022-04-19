import React from 'react';
//import heroVideo from '../assets/Hero_Video.mp4';
import HeroImage from '../assets/Hero_Image';
import Main from '../layouts/Main';
import events from '../data/events';
import partners from '../data/partners';

const Index = () => (
  <Main
    title="Home"
    description="Blockchain-focused research/consulting/technology group. Analyze, research, create and Inspire."
  >
    <section className='h-[calc(100vh_-_4rem)] relative'>
      {/*<div className='-z-10 invert hue-rotate-90 absolute w-full sm:w-1/2 right-0 top-0'>
        <video className='absolute right-0 top-0' loop={true} muted={true} playsInline={true} autoPlay={true} poster=''>
          <source src={heroVideo} type="video/mp4" />
        </video>
</div>*/}
      {/*dot svg from https://clipart.me/backgrounds/dot-wave-background-35074*/}
      <div className='-z-5 absolute w-full md:w-1/2 right-0 top-0 overflow-clip'><HeroImage className='h-screen' /></div>
      <div className='h-full grid grid-cols-12 grid-rows-1 content-center px-4 lg:px-20'>
        <div className='relative z-5 col-start-1 col-end-13 md:col-end-7 row-start-1 row-end-2 flex flex-col justify-center'>
          <h1 className='text-6xl sm:text-7xl'>Welcome to Imperial Blockchain Group's Website</h1>
          <div className='my-4'>
            <a href='/newsletter' className='inline'><span className='p-2 inline hover:bg-slate-300/50 hover:underline rounded border-2 mr-2'>Newsletter</span></a>
            <a href='#events' className='inline'><span className='p-2 inline hover:bg-slate-300/50 hover:underline rounded border-2'>Events</span></a>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-yellow-500 h-40 relative z-10'>
      Stats go here
    </section>
    <section className='px-4 lg:px-20 py-8'>
      <h2 className='text-xl font-bold text-yellow-500' id='events'>Events</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 divide-y-2 sm:divide-y-0'>
        {events.map((s) => (
          <div key={s.name} className='pt-2'>
            <p className='font-bold'>{s.name}</p>
            <p className='italic text-slate-300'>{s.date}</p>
            <p>{s.desc}</p>
            {s.url && <a href={s.url}><p className='primary-button mt-4'>Learn More</p></a>}
          </div>
        ))}
      </div>
    </section>
    <section className='px-4 lg:px-20 py-8'>
      <h2 className='text-xl font-bold text-yellow-500'>About</h2>
    </section>
    <section className='px-4 lg:px-20 py-8'>
      <h2 className='text-xl font-bold text-yellow-500'>Partners</h2>
      <div className='flex flex-wrap gap-3 mt-2'>
        {partners.map((s) => (
          <a href={s.url} key={s.name} className=''><img src={s.imageUrl} alt={s.name} className='w-32 h-32 bg-slate-500' /></a>
        ))}
      </div>
      <a href='/partners' ><p className='transition-all bg-gradient-to-r from-blue-600 to-blue-200 bg-left-bottom bg-[length:100%_0.15rem] bg-no-repeat hover:bg-[length:100%_0.15rem] hover:from-rose-600 hover:to-yellow-500 my-2 w-fit'>Read more</p></a>
    </section>
  </Main>
);

export default Index;