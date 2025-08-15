import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/featuredProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="my-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Featured Picks
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-[#00927F]/50 shadow-xl border border-[#D3FFBE] hover:shadow-2xl transition-shadow"
          >
            <figure className="px-4 pt-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">
                ${product.price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#00927F] text-white btn-sm btn-outline border-[#00E958]/50 hover:bg-[#00E958]/50 hover:text-[#000]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
