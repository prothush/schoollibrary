import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react"; 

const reviews = [
  {
    id: 1,
    name: "Sophia Turner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amazing quality products and super fast delivery. Definitely recommend this store!",
    rating: 5,
  },
  {
    id: 2,
    name: "Liam Johnson",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Great prices and awesome deals. The summer sale saved me a lot of money!",
    rating: 4,
  },
  {
    id: 3,
    name: "Ava Martinez",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Customer support was very responsive and helpful. I’m super happy with my purchase.",
    rating: 5,
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[index];

  return (

    <section className="my-16 bg-gradient-to-b from-[#009A81] via-emerald-500 to-[#80CDC0] py-16 rounded-2xl shadow-lg text-white w-11/12 mx-auto"> 
      <h2 className="text-3xl font-bold text-center mb-10 drop-shadow-lg">
        What Our Customers Say
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}

            className="p-6 rounded-xl text-center relative"
          >

            <div className="flex justify-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>


            <p className="mt-4 text-lg italic text-white">“{review.text}”</p>


            <div className="flex justify-center mt-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              ))}
            </div>


            <h3 className="mt-3 font-semibold text-yellow-200">{review.name}</h3>
          </motion.div>
        </AnimatePresence>


        <div className="flex gap-4 mt-8">
          <button
            onClick={prevReview}
            className="btn btn-outline btn-sm border-[#fff]/50 hover:bg-[#00E958]/50 hover:text-[#000] transition-transform hover:scale-105" // 🔥 Updated button styles
          >
            ⬅ Prev
          </button>
          <button
            onClick={nextReview}
            className="btn btn-outline btn-sm border-[#fff]/50 hover:bg-[#00E958]/50 hover:text-[#000] transition-transform hover:scale-105" // 🔥 Updated button styles
          >
            Next ➡
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
