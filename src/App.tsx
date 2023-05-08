import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { NavigationButtons } from './components/NavigationButtons';
import { data } from './utils/helpers';
import { DarkHero } from './components/DarkHero';
import { About } from './components/About';
import { LightHero } from './components/LightHero';
import { Navbar } from './components/Navbar';
import { CTA } from './components/CTA';
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
    <div className="font-Spartan w-full grid mobile-grid md:grid-cols-10 md:grid-rows-6 md:h-screen">
      <Navbar></Navbar>
      <Hero imageIndex={sliderIndex + 1}></Hero>
      <CTA
        title={data[sliderIndex].title}
        content={data[sliderIndex].content}
      />
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
