import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useForm } from 'react-hook-form';
import Main from '../layouts/Main';
import raw from 'raw.macro';

const markdown = raw('../data/signup-page.md');

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Change this to firebase endpont
  const onSubmit = (data) => console.log(data, markdown);
  return (
    <Main
      title="Signup"
      description="Signup form for Imperial Blockchain Group"
    >
      <section className='min-h-[calc(100vh_-_10rem)] px-4 lg:px-20 my-2'>
        <h1 className='text-4xl mt-4'>Signup</h1>
        <div className='flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 divide-gray-300'>
          <div className='w-full sm:w-1/2 py-2'>
            <ReactMarkdown children={markdown} escapeHtml={false} className='markdown' />
          </div>
          <div className='w-full sm:w-1/2 py-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
              <div className='flex flex-col mb-4'>
                <label htmlFor='firstName' className='mb-1'><span>Firstname:</span></label>
                <input {...register('firstName', { required: true })}
                  className='contact-form py-1 px-2'
                  placeholder='John' />
                {errors.firstName && <p className='italic text-red-500'>First name is required.</p>}
              </div>
              <div className='flex flex-col mb-4'>
                <label htmlFor='lastName' className='mb-1'><span>Lastname:</span></label>
                <input {...register('lastName', { required: true })}
                  className='contact-form py-1 px-2'
                  placeholder='Doe' />
                {errors.lastName && <p className='italic text-red-500'>Last name is required.</p>}
              </div>
              <div className='flex flex-col mb-4'>
                <label htmlFor='email' className='mb-1'><span>Email:</span></label>
                <input {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                  className='contact-form py-1 px-2'
                  placeholder='john.doe@ymail.com' />
                {errors.email && <p className='italic text-red-500'>Enter a valid email</p>}
              </div>
              <div className='flex mb-4 items-center'>
                <input type='checkbox' {...register('newsletterSub')} className='mr-2 w-4' />
                <label htmlFor='newsletterSub'><p>Subscribe to IBG weekly newsletter</p></label>
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
export default Signup;