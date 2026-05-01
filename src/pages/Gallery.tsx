import { motion } from 'framer-motion';

const Gallery = () => {
  // Placeholder gallery images - in a real scenario, these would be actual event photos
  const galleryImages = [
    '/assets/image4.jpeg?w=400',
    '/assets/image5.jpeg?w=400',
    '/assets/image6.jpeg?w=400',
    '/assets/image7.jpeg?w=400',
    '/assets/image8.jpeg?w=400',
  ];

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
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm sm:text-base font-semibold">
                    বিস্তারিত দেখুন
                  </span>
                </div>
              </motion.div>
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
    </div>
  );
};

export default Gallery;
