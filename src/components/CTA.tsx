import React from 'react';

export const CTA = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col justify-center items-center px-8 lg:px-16 xl:px-24 gap-3 lg:gap-4 md:col-start-7 md:col-end-11 md:row-start-1 md:row-end-5">
      <h1 className="self-start font-bold text-3xl lg:text-4xl tracking-[-0.1em] lg:leading-10">
        {title}
      </h1>
      <p className="font-semibold text-[10px] lg:text-xs text-darkGray lg:leading-5">
        {content}
      </p>
      <button className="self-start flex items-center gap-4 font-semibold text-[10px] tracking-[0.75rem] mt-5 lg:mt-2">
        SHOP NOW
        <img src="./images/icon-arrow.svg" alt="" />
      </button>
    </div>
  );
};
