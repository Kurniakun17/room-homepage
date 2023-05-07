import React from 'react';

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex items-center p-5 py-10 justify-between">
        <button>
          <img src="./images/icon-hamburger.svg" alt="" />
        </button>
        <img src="./images/logo.svg" alt="" />
        <div></div>
      </div>
    </div>
  );
};
