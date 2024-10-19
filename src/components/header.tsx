'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import mainLogo from '../../public/main-logo.png';
import { BurgerMenu } from '@/icons/burger-menu';
import { CloseIcon } from '@/icons/close-icon';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="flex justify-between items-center px-4 border-b-[1px] border-b-blue-500 shadow-lg fixed top-0 right-0 w-full bg-white z-30">
      <div className="ml-4">
        <a href="#">
          {' '}
          <Image alt="main-logo" src={mainLogo} width={80} height={80} />
        </a>
      </div>
      <div className="flex justify-center items-center mr-6">
        <button onClick={toggleMenu}>
          <BurgerMenu />
        </button>
      </div>
      <nav
        className={`fixed top-0 right-0 h-full w-[60%] bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="ml-[10px] mt-[10px]"
        >
          <CloseIcon />
        </button>
        <ul className="p-4">
          <li className="mb-4">Menu Item 1</li>
          <li className="mb-4">Menu Item 2</li>
          <li className="mb-4">Menu Item 3</li>
        </ul>
      </nav>
    </header>
  );
};
