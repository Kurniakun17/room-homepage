import React from 'react';

export const Hero = ({ imageIndex }: { imageIndex: number }) => {
  return (
    <div>
      <picture>
        <source
          srcSet={`./images/desktop-image-hero-${imageIndex}.jpg`}
          media="(min-width: 1440px)"
        ></source>
        <img
          className="w-full object-cover object-bottom h-[60vh]"
          src={`./images/mobile-image-hero-${imageIndex}.jpg`}
          alt=""
        />
      </picture>
    </div>
  );
};
