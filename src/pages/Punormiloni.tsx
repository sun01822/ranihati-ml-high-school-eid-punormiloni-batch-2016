import { motion } from 'framer-motion';

const Punormiloni = () => {
  // History of punormiloni events
  const history = [
    // {
    //   year: '২০১৫',
    //   title: 'প্রথম পুনর্মিলনী',
    //   description: 'প্রথমবারের মতো ঈদুল ফিতরের দিন আমরা একত্রিত হয়েছিলাম। প্রায় ৫০ জন বন্ধু উপস্থিত ছিল।',
    // },
    // {
    //   year: '২০১৭',
    //   title: 'দ্বিতীয় পুনর্মিলনী',
    //   description: 'এই বছর আমরা একটি বড় হল ভাড়া করে উদযাপন করেছিলাম। পরিবারের সদস্যরাও আমন্ত্রণ করা হয়েছিল।',
    // },
    // {
    //   year: '২০১৯',
    //   title: 'তৃতীয় পুনর্মিলনী',
    //   description: 'এই পুনর্মিলনীতে আমরা একটি স্মৃতি অ্যালবাম তৈরি করেছিলাম যেখানে সবার ছবি এবং তথ্য সংরক্ষিত আছে।',
    // },
    // {
    //   year: '২০২২',
    //   title: 'চতুর্থ পুনর্মিলনী',
    //   description: 'কোভিড পরবর্তী প্রথম পুনর্মিলনী। স্বাস্থ্যবিধি মেনে একটি সীমিত আকারের অনুষ্ঠান হয়েছিল।',
    // },
    // {
    //   year: '২০২৫',
    //   title: 'পঞ্চম পুনর্মিলনী',
    //   description: 'সবচেয়ে বড় পুনর্মিলনী। ১০০+ জন অংশগ্রহণকারী এবং একটি বিশেষ সাংস্কৃতিক অনুষ্ঠান।',
    // },
    {
      year: '২০২৬',
      title: 'প্রথম পুনর্মিলনী (আসন্ন)',
      description: 'আসন্ন ঈদ-উল-আযহার ৩য় দিন আমরা আবার মিলিত হব। তোমাকে অপেক্ষা করতে হবে না!',
    },
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
              পুনর্মিলনী
            </h1>
            <p className="text-lg sm:text-xl text-green-200">
              রাণীহাটি বহুমুখী উচ্চ বিদ্যালয় উচ্চ বিদ্যালয় এসএসসি ২০১৬ ব্যাচ
            </p>
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
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">📅 তারিখ: ঈদ-উল-আযহার ৩য় দিন</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">📍 স্থান: রাণীহাটি বহুমুখী উচ্চ বিদ্যালয়</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">⏰ সময়: সকাল ৮টা থেকে</p>
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
