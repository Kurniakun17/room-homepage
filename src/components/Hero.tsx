import React from 'react';

export const Hero = ({ imageIndex }: { imageIndex: number }) => {
  return (
    <div className="md:col-span-6 md:row-span-4">
      <picture>
        <source
          srcSet={`./images/desktop-image-hero-${imageIndex}.jpg`}
          media="(min-width: 768px)"
        ></source>
        <img
          className="w-full h-full object-cover"
          src={`./images/mobile-image-hero-${imageIndex}.jpg`}
          alt=""
        />
      </picture>
    </div>
  );
};
