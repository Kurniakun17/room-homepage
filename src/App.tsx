import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { NavigationButtons } from './components/NavigationButtons';
import { data } from './utils/helpers';
import { DarkHero } from './components/DarkHero';
import { About } from './components/About';
import { LightHero } from './components/LightHero';
import { Navbar } from './components/Navbar';
function App() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const onNavigationHandler = (type: string) => {
    if (type === 'next') {
      setSliderIndex((prev: number) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    } else {
      setSliderIndex((prev: number) => {
        if (prev === 0) return 2;
        return prev - 1;
      });
    }
  };

  return (
    <div className="font-leagueSpartan min-h-[100vh]">
      <Navbar></Navbar>
      <Hero
        imageIndex={sliderIndex + 1}
      ></Hero>
      <div className="flex flex-col justify-center items-center px-8 gap-3 h-[60vh]">
        <h1 className="self-start font-bold text-[34px] tracking-[-0.1em] leading-10">
          {data[sliderIndex].title}
        </h1>
        <p className="font-semibold text-[10px] text-darkGray leading-5">
          {data[sliderIndex].content}
        </p>
        <button className="self-start flex items-center gap-4 font-semibold text-[10px] tracking-[0.75rem] mt-5">
          SHOP NOW
          <img src="./images/icon-arrow.svg" alt="" />
        </button>
      </div>
      <NavigationButtons
        onNavigationHandler={onNavigationHandler}
      ></NavigationButtons>
      <DarkHero></DarkHero>
      <About></About>
      <LightHero></LightHero>
    </div>
  );
}

export default App;
