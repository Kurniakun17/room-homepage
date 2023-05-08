import React from 'react';

export const NavigationButtons = ({
  onNavigationHandler,
}: {
  onNavigationHandler: (type: string) => void;
}) => {
  return (
    <div className="absolute z-10 top-[calc(50vh-52px)] left-[calc(100vw-119.33px)] md:static md:col-start-7 md:col-end-8 md:row-start-4 md:row-end-5 md:place-self-end md:w-full">
      <div className="flex md:w-full">
        <button
          className="bg-black p-4 md:px-0 md:w-full md:flex md:justify-center lg:py-6"
          onClick={() => {
            onNavigationHandler('previous');
          }}
        >
          <img className="h-5 px-2" src="./images/icon-angle-left.svg" alt="" />
        </button>
        <button
          className="bg-black p-4 md:px-0 md:w-full md:flex md:justify-center lg:py-6"
          onClick={() => {
            onNavigationHandler('next');
          }}
        >
          <img
            className="h-5 px-2"
            src="./images/icon-angle-right.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
