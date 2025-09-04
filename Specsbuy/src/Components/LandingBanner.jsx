import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1628173491959-58b534438318?q=80&w=2940&auto=format&fit=crop',
    title: "MEN'S COLLECTION",
    subtitle: 'Find your stylish new signature look.',
    buttonText: 'Shop now',
  },
  {
    image:
      'https://placehold.co/1200x400/98FB98/ffffff?text=NEW+ARRIVALS',
    title: 'NEW ARRIVALS',
    subtitle: 'Discover the latest trends.',
    buttonText: 'Explore',
  },
  {
    image:
      'https://placehold.co/1200x400/FFA07A/ffffff?text=SUMMER+SALE',
    title: 'SUMMER SALE',
    subtitle: 'Up to 50% off on selected items.',
    buttonText: 'Shop now',
  },
];

const LandingBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="flex justify-center items-center bg-gray-100 font-[Inter] p-4">
      <div className="relative w-full max-w-full mx-auto">
        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] mx-4 relative rounded-3xl overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <div
                  className="h-[500px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Gradient overlay + content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-base md:text-lg text-white mb-4">
                      {slide.subtitle}
                    </p>
                    <button className="w-fit bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows & Indicators */}
        <div className="flex justify-center mt-4">
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full text-black hover:bg-gray-200 transition-all duration-300 z-20"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex items-center space-x-2 mx-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === selectedIndex ? 'bg-black' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="p-3 rounded-full text-black hover:bg-gray-200 transition-all duration-300 z-20"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
