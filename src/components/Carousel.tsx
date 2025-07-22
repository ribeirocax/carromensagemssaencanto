import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Error loading image:', e.currentTarget.src);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-800">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;