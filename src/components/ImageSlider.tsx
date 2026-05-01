import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  autoSlideInterval?: number;
  className?: string;
}

const ImageSlider = ({ images, autoSlideInterval = 4000, className = '' }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = currentIndex + 1;

  useEffect(() => {
    if (autoSlideInterval > 0 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(timer);
    }
  }, [images.length, autoSlideInterval, isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePause = (e) => {
    e.stopPropagation();
    setIsPaused(!isPaused);
  };

  return (
    <div className={`group relative w-full h-full overflow-hidden rounded-2xl bg-green-950 ${className}`}>
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6">
        <div className="max-w-xl">
          <p className="text-xs sm:text-sm font-semibold uppercase text-yellow-300">
            পুরনো স্মৃতি
          </p>
          <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white drop-shadow">
            আমাদের একসাথে কাটানো মুহূর্ত
          </h3>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-green-900 shadow-lg transition-all hover:scale-105 hover:bg-yellow-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-green-900 shadow-lg transition-all hover:scale-105 hover:bg-yellow-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute left-4 top-4 z-20 rounded-full bg-black/35 p-2 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/55"
        aria-label={isPaused ? "Play slides" : "Pause slides"}
      >
        {isPaused ? (
          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-7 bg-yellow-300'
                : 'w-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute right-4 top-4 z-20 rounded-full bg-black/35 px-3 py-1 text-white shadow-lg backdrop-blur-md">
        <span className="text-white text-xs sm:text-sm font-medium">
          {currentSlide} / {images.length}
        </span>
      </div>

      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-white/20">
        <motion.div
          key={`${currentIndex}-${isPaused}`}
          initial={{ width: '0%' }}
          animate={{ width: isPaused ? '0%' : '100%' }}
          transition={{ duration: isPaused ? 0 : autoSlideInterval / 1000, ease: 'linear' }}
          className="h-full bg-yellow-300"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
