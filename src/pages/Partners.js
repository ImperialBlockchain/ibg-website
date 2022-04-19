import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Main from '../layouts/Main';
import partners from '../data/partners';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

const Partners = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <Main
      title="Partners"
      description="Page for sponsors and other partners"
    >
      <section className='px-4 lg:px-20 py-2 pb-8'>
        <h1 className='text-4xl mt-4 text-yellow-500'>Partners</h1>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={10}
          navigation={true}
          virtual
          className='my-4'
        >
          {partners.map((s, i) => (
            <SwiperSlide key={s.name} virtualIndex={i}>
              <h2 className='font-bold text-yellow-500 text-xl'>{s.name}</h2>
              Tier: {s.tier}
              <img src={s.imageUrl} alt={s.name} className='w-full sm:w-3/4 md:w-1/2 bg-slate-500' />
              <ReactMarkdown
                children={s.desc}
                className='markdown' />
              {s.url && <a href={s.url}><p className='primary-button w-fit p-1'>Learn more</p></a>}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex flex-wrap gap-3 mt-2'>
          {partners.map((s, i) => (
            <button href={s.url} key={s.name} className='' onClick={() => slideTo(i + 1)}><img src={s.imageUrl} alt={s.name} className='w-32 h-32 bg-slate-500' /></button>
          ))}
        </div>
      </section>
    </Main>
  )
};
export default Partners;
