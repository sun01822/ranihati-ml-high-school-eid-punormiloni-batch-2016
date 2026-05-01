import { motion } from 'framer-motion';
import { GraduationCap, Users, Heart } from 'lucide-react';

const About = () => {
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
              আমাদের সম্পর্কে
            </h1>
            <p className="text-lg sm:text-xl text-green-200">
              রাণীহাটি বহুমুখী উচ্চ বিদ্যালয়ের এসএসসি ২০১৬ ব্যাচ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6">আমাদের গল্প</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              ২০১৬ সালে রাণীহাটি বহুমুখী উচ্চ বিদ্যালয় থেকে এসএসসি পাস করেছিলাম আমরা।
              সেই সময়ের স্মৃতি, বন্ধুত্ব এবং শিক্ষকদের প্রতি ভালোবাসা আমাদের বেঁধে রেখেছে।
              প্রতি বছর ঈদ-উল-আযহার  ৩য় দিন আমরা একত্রিত হই পুনর্মিলনী উদযাপন করতে।
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              এই পুনর্মিলনী শুধুমাত্র একটি সমাবেশ নয়, এটি আমাদের জীবনের সবচেয়ে স্মৃতিময়
              সময়ের সাথে পুনরায় মিলিত হওয়ার একটি সুযোগ। এখানে আমরা পুরনো দিনের কথা
              মনে করি, বর্তমানের খবরাখবর নিই এবং ভবিষ্যতের জন্য পরিকল্পনা করি।
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
            {[
              {
                icon: GraduationCap,
                title: 'শিক্ষা',
                desc: 'বিদ্যালয়ের মাধ্যমে শিক্ষা জীবন শুরু',
              },
              {
                icon: Users,
                title: 'বন্ধন',
                desc: 'স্থায়ী বন্ধুত্বের বন্ধন',
              },
              {
                icon: Heart,
                title: 'ভালোবাসা',
                desc: 'পারস্পরিক ভালোবাসা ও সম্মান',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-4 sm:p-6 bg-green-50 rounded-xl"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
