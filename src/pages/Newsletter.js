import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Main from '../layouts/Main';
import markdownFile from '../data/newsletter/issue_1/issue_1_post_1.md';
import issue_1_authors from '../data/newsletter/issue_1/issue_1_authors';

const Newsletter = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    console.log(issue_1_authors)
    fetch(markdownFile)
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }, []);
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
        <p>
          <h2 className='text-xl font-bold'>Writers</h2>
          {issue_1_authors.map((s) => (
            <div key={s.name}>
              <b>{s.name}</b>
              <br />
              <em>{s.desc}</em>
              <br />
            </div>
          ))}
        </p>
      </div>
    </Main>
  );
}
export default Newsletter;