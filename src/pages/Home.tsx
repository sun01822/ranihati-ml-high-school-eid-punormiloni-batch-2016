import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { ArrowRight, Calendar, Users, Camera, Clock } from 'lucide-react';

const Home = () => {
  const registrationCount = 59;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-05T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const sliderImages = [
    '/assets/banner.png?w=800',
    '/assets/image1.jpg?w=800',
    '/assets/image2.jpg?w=800',
    '/assets/image3.jpg?w=800',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with School Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920"
            alt="Ranihati M.L. High School"
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
            রাণীহাটি বহুমুখী উচ্চ বিদ্যালয়
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8"
          >
            এসএসসি ব্যাচ - ২০১৬
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

      {/* Registration Count & Countdown Section */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 sm:p-8 text-center shadow-xl"
            >
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">রেজিস্ট্রেশন সংখ্যা</h3>
              <motion.p
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-300"
              >
                {registrationCount}+
              </motion.p>
              <p className="text-white/80 mt-2">জন নিবন্ধিত</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 sm:p-8 text-center shadow-xl"
            >
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">রেজিস্ট্রেশন শেষ হওয়ার সময়</h3>
              <div className="flex justify-center gap-2 sm:gap-4 mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{timeLeft.days}</p>
                  <p className="text-white/80 text-xs sm:text-sm">দিন</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{timeLeft.hours}</p>
                  <p className="text-white/80 text-xs sm:text-sm">ঘন্টা</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{timeLeft.minutes}</p>
                  <p className="text-white/80 text-xs sm:text-sm">মিনিট</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{timeLeft.seconds}</p>
                  <p className="text-white/80 text-xs sm:text-sm">সেকেন্ড</p>
                </div>
              </div>
              <p className="text-white/80 mt-4 text-sm sm:text-base">৫ মে, ২০২৬</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-10 sm:py-14 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="shadow-2xl"
          >
            <div className="h-[300px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
              <ImageSlider
                images={sliderImages}
                autoSlideInterval={4000}
              />
            </div>
          </motion.div>
        </div>
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
                desc: 'ঈদ-উল-আযহার ৩য় দিন, ২০২৬',
              },
              {
                icon: Users,
                title: 'অংশগ্রহণকারী',
                desc: 'এসএসসি ২০১৬ ব্যাচের সকলে',
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
            src="/assets/banner.png"
            alt="Eid Punormiloni Banner"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
