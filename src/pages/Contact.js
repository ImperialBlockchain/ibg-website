import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useForm } from 'react-hook-form';
import Main from '../layouts/Main';
import raw from 'raw.macro';
import ContactIcons from '../components/Contact/ContactIcons';

const markdown = raw('../data/contact-page.md');

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Change this to firebase endpont
  const onSubmit = (data) => console.log(data, markdown);
  return (
    <Main
      title="Contact"
      description="Contact Imperial Blockchain Group via the contact form"
    >
      <section className='min-h-[calc(100vh_-_10rem)] px-4 lg:px-20 py-2'>
        <h1 className='text-4xl mt-4'>Contact Us!</h1>
        <div className='flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 divide-gray-300'>
          <div className='w-full sm:w-1/2 py-2'>
            <ReactMarkdown
              children={markdown}
              escapeHtml={false}
              remarkPlugins={[remarkGfm]}
              className='markdown' />
            <ContactIcons />
          </div>
          <div className='w-full sm:w-1/2 py-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
              <div className='flex flex-col mb-4'>
                <label htmlFor='name' className='mb-1'><span>Name:</span></label>
                <input {...register('name', { required: true })}
                  className='contact-form py-1 px-2'
                  placeholder='John Doe' />
                {errors.name && <p className='italic text-red-500'>Name is required.</p>}
              </div>
              <div className='flex flex-col mb-4'>
                <label htmlFor='email' className='mb-1'><span>Email:</span></label>
                <input {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                  className='contact-form py-1 px-2'
                  placeholder='john.doe@ymail.com' />
                {errors.email && <p className='italic text-red-500'>Enter a valid email</p>}
              </div>
              <div className='flex flex-col mb-4'>
                <label htmlFor='message' className='mb-1'><span>Message:</span></label>
                <textarea {...register('message', { required: true })}
                  className='contact-form py-1 px-2'
                  placeholder='Your message here'
                  rows="4"
                ></textarea>
                {errors.message && <p className='italic text-red-500'>Enter a message</p>}
              </div>
              <div className='w-full'>
                <input value='Submit' type="submit" className='primary-button w-48 p-1 mx-auto block' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Main>
  );
}
export default Contact;