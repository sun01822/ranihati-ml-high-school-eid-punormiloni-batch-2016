import { motion } from 'framer-motion';

const Gallery = () => {
  // Placeholder gallery images - in a real scenario, these would be actual event photos
  const galleryImages = [
    'https://images.unsplash.com/photo-1531306760863-7ff7c7f4f1fc?w=400',
    'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=400',
    'https://images.unsplash.com/photo-1523447494698-60ea4621f2b4?w=400',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400',
  ];

  return (
    <div className="min-h-screen pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="pt-16 pb-10 sm:py-12 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              ফটো গ্যালারি
            </h1>
            <p className="text-lg sm:text-xl text-green-200">
              আমাদের পুনর্মিলনীর স্মৃতি
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