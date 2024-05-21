import React from 'react';

const Notification = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-5 pb-5 bg-primary'>
      <h1 className='text-3xl font-bold text-white sm:text-4xl' >Get Notified About New Products</h1>
      <input type="text" placeholder='Enter your Email ' className='h-8 p-3 pl-10 pr-10 rounded-xl hover:m-none' />
    </div>
  )
}

export default Notification;
