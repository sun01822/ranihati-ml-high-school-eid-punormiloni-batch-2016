import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Camera } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with School Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920"
            alt="Holokhana School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
          >
            ঈদ পুনর্মিলনী
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-yellow-200 mb-2"
          >
            হলোখানা দ্বি-মুখী উচ্চ বিদ্যালয়
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8"
          >
            এসএসসি ব্যাচ - ২০১০
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/punormiloni"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              বিস্তারিত দেখুন
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-1.5 sm:pt-2">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            আমাদের পুনর্মিলনী
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Calendar,
                title: 'তারিখ',
                desc: 'ঈদুল ফিতরের ২য় দিন, ২০২৬',
              },
              {
                icon: Users,
                title: 'অংশগ্রহণকারী',
                desc: 'এসএসসি ২০১০ ব্যাচের সকলে',
              },
              {
                icon: Camera,
                title: 'স্মৃতিচারণ',
                desc: 'একসাথে সময় কাটানোর অপূর্ব সুযোগ',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:bg-white/20 transition-colors"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-300 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src="/src/assets/eid-banner.jpg"
            alt="Eid Punormiloni Banner"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;