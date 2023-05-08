import React, { useState } from 'react';

export const Navbar = () => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const onOpenHandler = () => {
    setIsCanvasOpen(true);
  };

  const onCloseHandler = () => {
    setIsCanvasOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between p-5 py-12 md:justify-start md:gap-12 md:px-12">
        <button className="md:hidden" onClick={onOpenHandler}>
          <img src="./images/icon-hamburger.svg" alt="" />
        </button>
        <img className='py-2' src="./images/logo.svg" alt="" />
        <div className="hidden md:flex gap-6 text-white text-sm mt-1 py-1">
          <a className="hover:border-b-2 border-white" href="">
            home
          </a>
          <a className="hover:border-b-2 border-white" href="">
            shop
          </a>
          <a className="hover:border-b-2 border-white" href="">
            about
          </a>
          <a className="hover:border-b-2 border-white" href="">
            contact
          </a>
        </div>
        <div className="md:hidden"></div>
      </div>
      <div
        className={`absolute w-full top-0 flex justify-between bg-white p-5 py-12 ${
          isCanvasOpen ? 'translate-x-0' : 'translate-x-[-1000px]'
        } transition-transform md:hidden`}
      >
        <button onClick={onCloseHandler}>
          <img src="./images/icon-close.svg" alt="" />
        </button>
        <div className="flex gap-6 text-sm">
          <a className="hover:border-b-2 border-black" href="">
            home
          </a>
          <a className="hover:border-b-2 border-black" href="">
            shop
          </a>
          <a className="hover:border-b-2 border-black" href="">
            about
          </a>
          <a className="hover:border-b-2 border-black" href="">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};
