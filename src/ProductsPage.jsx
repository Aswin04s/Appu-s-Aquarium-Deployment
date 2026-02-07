import { useState } from 'react';
import productsData from './data/products.js';

function ProductsPage({ addToCart }) {
    const [filter, setFilter] = useState("All");

    const filteredProducts = filter === "All"
        ? productsData
        : productsData.filter(product => product.category === filter);

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">Our Products</h2>

            {/* Filter Section */}
            <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-2">
                {["All", "Fish", "Food", "Tanks", "Accessories"].map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-2 rounded-full font-semibold transition shadow-sm ${filter === category
                            ? "bg-cyan-600 text-white shadow-cyan-200"
                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
                        <div className="h-48 overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+Image' }}
                            />
                        </div>
                        <div className="p-4">
                            <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded uppercase tracking-wide">{product.category}</span>
                            <h3 className="text-lg font-bold text-gray-800 mt-2">{product.name}</h3>
                            <p className="text-xl font-bold text-gray-900 mt-1">₹{product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full mt-4 bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition font-semibold shadow-md active:transform active:scale-95"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No products found in this category.</p>
            )}
        </section>
    );
}

export default ProductsPage;