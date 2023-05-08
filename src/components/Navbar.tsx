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
      <div className="flex items-center justify-between p-5 py-12 ">
        <button onClick={onOpenHandler}>
          <img src="./images/icon-hamburger.svg" alt="" />
        </button>
        <img src="./images/logo.svg" alt="" />
        <div></div>
      </div>
      <div
        className={`absolute w-full top-0 flex justify-between bg-white p-5 py-12 ${
          isCanvasOpen ? 'translate-x-0' : 'translate-x-[-1000px]'
        } transition-transform`}
      >
        <button onClick={onCloseHandler}>
          <img src="./images/icon-close.svg" alt="" />
        </button>
        <div className="flex gap-6">
          <a className="font-bold text-sm" href="">
            home
          </a>
          <a className="font-bold text-sm" href="">
            shop
          </a>
          <a className="font-bold text-sm" href="">
            about
          </a>
          <a className="font-bold text-sm" href="">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};
