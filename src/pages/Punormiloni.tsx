import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import { Clock, Users } from 'lucide-react';

const Punormiloni = () => {
  // Registration count
  const registrationCount = 87;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown
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

  // Images for the slider
  const sliderImages = [
    '/src/assets/eid-banner.jpg',
    'https://images.unsplash.com/photo-1531306760863-7ff7c7f4f1fc?w=800',
    'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800',
    'https://images.unsplash.com/photo-1523447494698-60ea4621f2b4?w=800',
  ];

  // History of punormiloni events
  const history = [
    {
      year: '২০১৫',
      title: 'প্রথম পুনর্মিলনী',
      description: 'প্রথমবারের মতো ঈদুল ফিতরের দিন আমরা একত্রিত হয়েছিলাম। প্রায় ৫০ জন বন্ধু উপস্থিত ছিল।',
    },
    {
      year: '২০১৭',
      title: 'দ্বিতীয় পুনর্মিলনী',
      description: 'এই বছর আমরা একটি বড় হল ভাড়া করে উদযাপন করেছিলাম। পরিবারের সদস্যরাও আমন্ত্রণ করা হয়েছিল।',
    },
    {
      year: '২০১৯',
      title: 'তৃতীয় পুনর্মিলনী',
      description: 'এই পুনর্মিলনীতে আমরা একটি স্মৃতি অ্যালবাম তৈরি করেছিলাম যেখানে সবার ছবি এবং তথ্য সংরক্ষিত আছে।',
    },
    {
      year: '২০২২',
      title: 'চতুর্থ পুনর্মিলনী',
      description: 'কোভিড পরবর্তী প্রথম পুনর্মিলনী। স্বাস্থ্যবিধি মেনে একটি সীমিত আকারের অনুষ্ঠান হয়েছিল।',
    },
    {
      year: '২০২৫',
      title: 'পঞ্চম পুনর্মিলনী',
      description: 'সবচেয়ে বড় পুনর্মিলনী। ১০০+ জন অংশগ্রহণকারী এবং একটি বিশেষ সাংস্কৃতিক অনুষ্ঠান।',
    },
    {
      year: '২০২৬',
      title: 'ষষ্ঠ পুনর্মিলনী (আসন্ন)',
      description: 'আসন্ন ঈদুল ফিতরের ২য় দিন আমরা আবার মিলিত হব। তোমাকে অপেক্ষা করতে হবে না!',
    },
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
              পুনর্মিলনী
            </h1>
            <p className="text-lg sm:text-xl text-green-200">
              হলোখানা দ্বি-মুখী উচ্চ বিদ্যালয় এসএসসি ২০১০ ব্যাচ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Count & Countdown Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration Count */}
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
                {registrationCount}
              </motion.p>
              <p className="text-white/80 mt-2">জন নিবন্ধিত</p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 sm:p-8 text-center shadow-xl"
            >
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">পুনর্মিলনী শেষ হওয়ার সময়</h3>
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
      <section className="py-8 sm:py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
              <ImageSlider
                images={sliderImages}
                autoSlideInterval={4000}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
              আসন্ন পুনর্মিলনী
            </h2>
            <div className="bg-green-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">📅 তারিখ: ঈদুল ফিতরের ২য় দিন</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">📍 স্থান: হলোখানা দ্বি-মুখী উচ্চ বিদ্যালয়</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">⏰ সময়: সকাল ১০টা থেকে</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 text-center mb-8 sm:mb-12"
          >
            পুনর্মিলনীর ইতিহাস
          </motion.h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Punormiloni;