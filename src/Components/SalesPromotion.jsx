import { motion } from "framer-motion"; 

const SalesPromotion = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-2xl overflow-hidden my-12 shadow-lg w-11/12 mx-auto">
      <div className="absolute inset-0 bg-[#00927F] bg-opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left mb-6 lg:mb-0"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
            Mega Summer Sale!
          </h2>
          <p className="mt-4 text-lg font-medium max-w-xl">
            Save up to <span className="font-bold text-yellow-300">50%</span> on our top-selling products.
            Limited time only – don’t miss out on these exclusive deals!
          </p>
          <div className="mt-6">
            <button className="btn bg-[#00E958]/50 border-[#00E958]/50 btn-lg shadow-xl hover:scale-105 transition-transform">
              Shop Now
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src="https://images.unsplash.com/photo-1755009012652-4fd36529e63a?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sale"
            className="w-80 rounded-xl shadow-2xl border-4 border-[#00E958]/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SalesPromotion;
