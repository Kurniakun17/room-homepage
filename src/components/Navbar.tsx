import React from 'react';

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex items-center p-4 py-8 justify-between">
        <button>
          <img src="./images/icon-hamburger.svg" alt="" />
        </button>
        <h2 className="font-bold text-lg text-white">room</h2>
        <div></div>
      </div>
    </div>
  );
};
