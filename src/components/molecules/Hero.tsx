/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

import GetStarted from '@/components/molecules/GetStarted';

import styles from '@/style';

import { robot } from '~/assets';

function Hero() {
  return (
    <section
      id='home'
      className={`flex flex-col md:flex-row ${styles.paddingY} dark:text-black`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 `}>
        <div className='bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] py-[6px] px-4'>
          <img
            src='/assets/Discount.svg'
            alt='discount'
            className='h-[32px] w-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For{' '}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div className='flex w-full flex-row items-center justify-between '>
          <h1 className='ss:text-[72px] ss:leading-[100.8px] flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white'>
            The Next <br className='hidden sm:block' />{' '}
            <span className='text-gradient'>Generation</span>{' '}
          </h1>
          <div className='mr-0 hidden sm:flex md:mr-4'>
            <GetStarted />
          </div>
        </div>
        <h1 className='ss:text-[68px] ss:leading-[100.8px] w-full font-poppins text-[52px] font-semibold leading-[75px] text-white'>
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <Image
          src={robot}
          alt='billing'
          className='relative z-[5]'
          height={1000}
          width={600}
        />

        {/* gradient start */}
        <div className='pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]' />
        <div className='white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
        <div className='blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]' />
        {/* gradient end */}
      </div>
    </section>
  );
}

export default Hero;
