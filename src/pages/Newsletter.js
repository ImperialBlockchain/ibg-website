import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHeading from 'remark-heading-id';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import Main from '../layouts/Main';
import newsletter from '../data/newsletter/newsletter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleRight';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleLeft';

const Newsletter = () => {
  const id = useParams().id || newsletter.length;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Main
      title="Newsletter"
      description="Page with all previous issues of the weekly newsletter"
    >
      <div className='px-4 lg:px-20 py-2'>
        <h2 className='text-xl'>Issue #{newsletter[id - 1].issue}</h2>
        <embed src={newsletter[id - 1].pdf_url} type="application/pdf" style={{ height: "90vh", width: "100%" }} />
        <div className='my-2'>
          <p id='all-issues' className='font-bold'>All issues</p>
          <div className='flex text-black'>
            {newsletter.map((s) => (
              s.issue === parseInt(id)
                ? <Link className='px-4 py-2 font-bold text-slate-100 bg-yellow-400 hover:bg-yellow-500 hover:text-slate-100' key={s.issue} to={`/newsletter/${s.issue}`}><p>{s.issue}</p></Link>
                : <Link className='px-4 py-2 bg-yellow-100 hover:bg-yellow-500 hover:text-slate-100' key={s.issue} to={`/newsletter/${s.issue}`}><p>{s.issue}</p></Link>
            ))}
          </div>
        </div>
        <div className='flex-wrap flex justify-between'>
          {id > 1 && <Link to={`/newsletter/${id - 1}`}>
            <p className='p-2 hover:underline hover:bg-slate-300/50 border-2 rounded'><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Previous issue</p>
          </Link>}
          {id < newsletter.length && <Link to={`/newsletter/${id - 1 + 2}`}>
            <p className='p-2 hover:underline hover:bg-slate-300/50 border-2 rounded'>Next issue <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
          </Link>}
        </div>
      </div>
    </Main >
  );
}
export default Newsletter;