import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Main from '../layouts/Main';
import newsletter from '../data/newsletter/newsletter';

const Newsletter = () => {
  const [markdown, setMarkdown] = useState('');
  const id = useParams().id || newsletter.length;

  useEffect(() => {
    // check if issue exists in newsletter array
    !newsletter[id - 1]
      ? setMarkdown(`Issue **#${id}** does not exist. [Click here](/) to be returned to the homepage`)
      :
      import(`../data/newsletter${newsletter[id - 1].path}`)
        .then(module => {
          fetch(module.default)
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  }, [id]);

  return (
    <Main
      description={'Page with all previous issues of the weekly newsletter'}
    >
      <div className='px-4 lg:px-20 my-2'>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          escapeHtml={false}
          className='markdown' />
        <br />
        <p className='font-bold'>All issues</p>
        <div className='flex'>
          {newsletter.map((s)=>(
            <Link className='px-4 py-2 bg-yellow-100 hover:bg-yellow-500 hover:text-white' to={`/newsletter/${s.issue}`}><p>{s.issue}</p></Link>
          ))}
        </div>
        <div>
          {id > 1 && <Link to={`/newsletter/${id - 1}`}>
            <p className='py-1 text-blue-500 hover:text-yellow-500 hover:underline'>Previous issue</p>
          </Link>}
          {id < newsletter.length && <Link to={`/newsletter/${id - 1 + 2}`}>
            <p className='py-1 ml-auto text-blue-500 hover:text-yellow-500 hover:underline'>Next issue</p>
          </Link>}
        </div>
      </div>
    </Main >
  );
}
export default Newsletter;