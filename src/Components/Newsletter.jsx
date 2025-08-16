import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="my-16 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-[#009A81] via-emerald-500 to-[#80CDC0] rounded-2xl shadow-lg p-10 text-white text-center"
      >

        <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          📩 Join Our Newsletter
        </h2>
        <p className="mt-3 text-lg opacity-90">
          Subscribe and be the first to know about our exclusive offers, new arrivals, and updates!
        </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-96 text-black rounded-xl shadow-md"
            required
          />
          <button
            type="submit"
            className="btn bg-[#00E958]/50 border-[#00E958]/50 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm opacity-80">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;
