import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
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
              যোগাযোগ করুন
            </h1>
            <p className="text-lg sm:text-xl text-green-200">
              আমাদের সাথে যোগাযোগের জন্য
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Phone,
                title: 'ফোন',
                info: '+880 1XXX-XXXXXX',
              },
              {
                icon: Mail,
                title: 'ইমেইল',
                info: 'ssc2010@holokhana.edu',
              },
              {
                icon: MapPin,
                title: 'ঠিকানা',
                info: 'হলোখানা, বাংলাদেশ',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-5 sm:p-6 md:p-8 bg-green-50 rounded-xl"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.info}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 sm:mt-12 bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">বার্তা পাঠান</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">আপনার নাম</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">ইমেইল</label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">বার্তা</label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="আপনার বার্তা লিখুন"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                পাঠান
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;