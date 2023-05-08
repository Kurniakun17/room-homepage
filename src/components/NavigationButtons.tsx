import React from 'react';

export const NavigationButtons = ({
  onNavigationHandler,
}: {
  onNavigationHandler: (type: string) => void;
}) => {
  return (
    <div className="absolute z-10 top-[calc(60vh-52px)] left-[calc(100vw-119.33px)]">
      <div className="flex">
        <button
          className="bg-black p-4"
          onClick={() => {
            onNavigationHandler('previous');
          }}
        >
          <img className="h-5 px-2" src="./images/icon-angle-left.svg" alt="" />
        </button>
        <button
          className="bg-black p-4"
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
