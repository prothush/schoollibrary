
import { motion } from "framer-motion";
import { Search, Filter, ShoppingCart, CreditCard } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search className="w-10 h-10 text-indigo-500" />,
    title: "Browse Products",
    desc: "Explore a wide range of items neatly organized in categories.",
  },
  {
    id: 2,
    icon: <Filter className="w-10 h-10 text-green-500" />,
    title: "Sort & Compare",
    desc: "Use our smart sorting tools to find products by price, rating, or popularity.",
  },
  {
    id: 3,
    icon: <ShoppingCart className="w-10 h-10 text-yellow-500" />,
    title: "Add to Cart",
    desc: "Select your favorites and add them to your shopping cart with one click.",
  },
  {
    id: 4,
    icon: <CreditCard className="w-10 h-10 text-pink-500" />,
    title: "Checkout Securely",
    desc: "Complete your order with our fast and secure payment process.",
  },
];

const HowItWorks = () => {
  return (
    <section className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center px-6"
      >

        <h2 className="text-3xl md:text-4xl font-bold mb-4">🛍️ How It Works</h2>
        <p className="text-lg text-gray-600 mb-10">
          Shopping with <span className="font-semibold text-[#009A81]">Sort & Shop</span> is quick and easy.  
          Just follow these four simple steps!
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
