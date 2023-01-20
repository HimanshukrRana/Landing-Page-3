/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { navlinks } from '@/constant';

function NavBar() {
  const [active, setActive] = React.useState('Home');
  const [toggle, setToggle] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState<boolean | undefined>(
    undefined
  );

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'false');
      window.document.documentElement.classList.add('dark');
    } else if (darkMode == false) {
      localStorage.setItem('darkMode', 'true');
      window.document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(localStorage.getItem('darkMode') === 'false');
    }
  }, [darkMode]);

  return (
    <nav className='navbar light:bg-slate-600 flex w-full items-center justify-between py-6 '>
      <Image
        src='/assets/logo.svg'
        alt='logo'
        className='h-[32px] w-[124px]'
        height={32}
        width={124}
      />
      <ul className='hidden flex-1 list-none items-start justify-end sm:flex'>
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer  font-poppins text-[16px] font-normal ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navlinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <Link href='#'>{nav.title}</Link>
            {/* href={`/${nav.id}`} */}
          </li>
        ))}
        <li className='ml-4 cursor-pointer ' onClick={switchMode}>
          <Image
            src={!darkMode ? '/favicon/sun.png' : '/favicon/moon.png'}
            alt='logo'
            className=''
            height={20}
            width={20}
          />
        </li>
      </ul>

      <div className='flex flex-1 items-center justify-end sm:hidden'>
        <Image
          src={toggle ? '/assets/close.svg' : '/assets/menu.svg'}
          alt='menu'
          className='h-[28px] w-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
          height={28}
          width={28}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className='flex list-none flex-col justify-end'>
            {navlinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal  ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navlinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
