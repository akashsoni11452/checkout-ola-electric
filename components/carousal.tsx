"use client"

import { useState } from 'react';
import Image from 'next/image';
import scooterImage1 from '../public/S1ProGen02_Amethyst_01.webp';
import scooterImage2 from '../public/S1ProGen02_Amethyst_02.webp';

const images = [scooterImage1, scooterImage2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gray-200">
      <button
        className="absolute left-4 z-10 p-2 bg-black text-white rounded-full"
        onClick={prevImage}
      >
        {'<'}
      </button>
      <div className="w-full h-full">
        <Image src={images[currentIndex]} alt="Ola Scooter" layout="fill" objectFit="contain" />
      </div>
      <button
        className="absolute right-4 z-10 p-2 bg-black text-white rounded-full"
        onClick={nextImage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
