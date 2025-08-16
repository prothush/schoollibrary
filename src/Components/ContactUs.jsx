
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="my-16 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-2xl shadow-lg p-10 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
          📞 Contact Us
        </h2>
        <p className="mt-2 text-center text-lg opacity-90">
          Have questions or feedback? We’d love to hear from you!
        </p>


        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-yellow-300" />
              <p>123 Main Street, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-yellow-300" />
              <p>+880 1234-567890</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-yellow-300" />
              <p>support@yourstore.com</p>
            </div>
          </div>


          <form className="space-y-4 bg-white p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-xl shadow-md 
             text-gray-900 dark:text-white 
             bg-white dark:bg-gray-800 
             border-gray-300 dark:border-gray-600 
             placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-xl shadow-md 
             text-gray-900 dark:text-white 
             bg-white dark:bg-gray-800 
             border-gray-300 dark:border-gray-600 
             placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded-xl shadow-md 
             text-gray-900 dark:text-white 
             bg-white dark:bg-gray-800 
             border-gray-300 dark:border-gray-600 
             placeholder-gray-500 dark:placeholder-gray-400"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-success w-full font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
