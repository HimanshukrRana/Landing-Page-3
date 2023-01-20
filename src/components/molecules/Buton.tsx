import React from 'react';

const Button = ({ styles }: any) => (
  <button
    type='button'
    className={`bg-blue-gradient btn-c rounded-[10px]  py-4 px-6 font-poppins text-[18px] font-medium text-primary outline-none hover:text-white ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
