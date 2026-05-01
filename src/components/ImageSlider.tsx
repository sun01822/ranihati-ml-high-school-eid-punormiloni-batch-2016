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
    <div className={`relative w-full h-full ${className}`}>
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute top-4 left-4 p-1.5 sm:p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors z-10"
        aria-label={isPaused ? "Play slides" : "Pause slides"}
      >
        {isPaused ? (
          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        ) : (
          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        )}
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 px-2 py-1 sm:px-3 sm:py-1 bg-black/30 backdrop-blur-sm rounded-full z-10">
        <span className="text-white text-xs sm:text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;