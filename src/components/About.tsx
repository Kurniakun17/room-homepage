import React from 'react';

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 md:px-12 gap-5 md:col-start-4 md:col-end-8 md:row-start-5 md:row-end-7">
      <h2 className="text-xs self-start font-bold tracking-[0.3rem] ">
        ABOUT OUR FURNITURE
      </h2>
      <p className="font-semibold text-[10px] text-darkGray leading-5">
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </div>
  );
};
