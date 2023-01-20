/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const FeedbackCard = ({ content, name, title, img }: any) => (
  <div className='feedback-card my-5 mr-0 flex max-w-[370px] flex-col  justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10'>
    <Image
      src='/assets/quotes.svg'
      alt='double_quotes'
      className='h-[27.6px] w-[42.6px] object-contain'
      width={43}
      height={28}
    />
    <p className='my-10 font-poppins text-[18px] font-normal leading-[32.4px] text-white'>
      {content}
    </p>

    <div className='flex flex-row'>
      <Image
        src={`/assets/${img}`}
        alt={name}
        className='h-[48px] w-[48px] rounded-full'
        width={48}
        height={48}
      />
      <div className='ml-4 flex flex-col'>
        <h4 className='font-poppins text-[20px] font-semibold leading-[32px] text-white'>
          {name}
        </h4>
        <p className='font-poppins text-[16px] font-normal leading-[24px] text-dimWhite'>
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
