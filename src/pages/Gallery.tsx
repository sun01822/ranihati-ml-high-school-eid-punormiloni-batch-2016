import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, Image as ImageIcon, Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/assets/image4.jpeg', title: 'বিদায় অনুষ্ঠান', label: 'স্মৃতি ০১', layout: 'md:col-span-2 md:row-span-2' },
    { src: '/assets/image5.jpeg', title: 'স্মৃতির ফ্রেম', label: 'স্মৃতি ০২', layout: '' },
    { src: '/assets/image6.jpeg', title: 'পুনর্মিলনীর হাসি', label: 'স্মৃতি ০৩', layout: '' },
    { src: '/assets/image7.jpeg', title: 'একসাথে মুহূর্ত', label: 'স্মৃতি ০৪', layout: '' },
    { src: '/assets/image8.jpeg', title: 'শ্রদ্ধেয় শিক্ষকবৃন্দ', label: 'স্মৃতি ০৫', layout: 'md:col-span-2' },
  ];

  const showPreviousImage = () => {
    setSelectedImage((current) => (
      current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length
    ));
  };

  const showNextImage = () => {
    setSelectedImage((current) => (
      current === null ? 0 : (current + 1) % galleryImages.length
    ));
  };

  return (
    <div className="min-h-screen pt-16 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="py-10 sm:py-12 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
              ফটো গ্যালারি
            </h1>
            <p className="text-lg sm:text-xl text-green-200">
              আমাদের স্মৃতি
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-100 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                <Camera className="h-4 w-4" />
                স্মৃতির অ্যালবাম
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                পুনর্মিলনীর ছবিগুলো
              </h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <ImageIcon className="h-4 w-4 text-green-700" />
              {galleryImages.length}টি ছবি
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid auto-rows-[210px] grid-cols-1 gap-5 sm:auto-rows-[240px] sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-3"
          >
            {galleryImages.map((image, index) => (
              <motion.button
                type="button"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-2xl bg-green-950 text-left shadow-lg ring-1 ring-black/5 transition-shadow hover:shadow-2xl ${image.layout}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 opacity-90" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 transition-all duration-300 group-hover:ring-4 group-hover:ring-yellow-300/35" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <Maximize2 className="h-3.5 w-3.5" />
                  দেখুন
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-xs font-semibold text-yellow-300">{image.label}</p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">{image.title}</h3>
                  <div className="mt-3 h-1 w-12 origin-left rounded-full bg-yellow-300 transition-all duration-300 group-hover:w-24" />
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-gray-500 mt-6 sm:mt-8 text-sm sm:text-base"
          >
            আসন্ন পুনর্মিলনীর ছবি শীঘ্রই যোগ করা হবে
          </motion.p>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Close gallery preview"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={showPreviousImage}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="flex h-full items-center justify-center">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-full max-w-5xl"
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-h-[70vh] w-full rounded-2xl border border-white/10 object-contain shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-yellow-300">
                  {galleryImages[selectedImage].label}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  {galleryImages[selectedImage].title}
                </h2>
              </div>
              <div className="mt-5 flex justify-center gap-2 overflow-x-auto pb-1">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      index === selectedImage ? 'border-yellow-300' : 'border-white/15 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`Open ${image.title}`}
                  >
                    <img src={image.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
