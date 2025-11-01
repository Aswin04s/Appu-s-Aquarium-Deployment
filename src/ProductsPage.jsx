// ProductsPage.jsx
import { useNavigate } from 'react-router-dom';

const allProducts = [
    // Fish Food
    { id: 1, name: "Premium Fish Food", price: "$15", category: "Food", image: "https://tse2.mm.bing.net/th/id/OIP.SYhdiBmcxKKaPHf-EtoZnQHaEI?pid=Api&P=0&h=180" },
    { id: 2, name: "Tropical Flakes", price: "$12", category: "Food", image: "https://imgs.search.brave.com/vIMTAVSHPkwzkneMkZINVgG2_2nDkYVEQQq4xnd_Tj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/dGljYXJ0cy5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvMW96LVRy/b3BpY2FsLUZsYWtl/cy1EaXNwbGF5LTEu/anBnP3Y9MTYzNzU5/MzAwNiZ3aWR0aD0x/MDgw" },
    { id: 3, name: "Carnivore Pellets", price: "$18", category: "Food", image: "https://imgs.search.brave.com/U0QaK05qj_jWGR4hc1ewi52G1EpF7PnDXvlZFQ-tHkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXJv/bGluYWFxdWF0aWNz/LmNvbS9jZG4vc2hv/cC9maWxlcy9DYXJu/aXZvcmUtZnJvbnQu/cG5nP3Y9MTcxODcy/NDA5MiZ3aWR0aD0x/NDQ1" },

    // Plants
    { id: 4, name: "Aquarium Plants Pack", price: "$25", category: "Plants", image: "http://www.snuffleandswim.com/cdn/shop/files/hugs_kisses_15.png?v=1714936323" },
    { id: 5, name: "Java Fern Bundle", price: "$18", category: "Plants", image: "https://imgs.search.brave.com/0K4BD2BVfG7X6S61yS4NpcuKlI5Q5dD354ZWvuD3oFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFQQU9xWit1c0wu/anBn" },
    { id: 6, name: "Anubias Nana", price: "$12", category: "Plants", image: "https://imgs.search.brave.com/nn6ykcXMVMcfKwM2hjEOkvytb0sV--x7l0rFpgpsMKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdXN0/aW5zZmlzaHRhbmtz/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy9X/TV9BbnViaWFzTmFu/YVBldGl0ZV8wMV84/MWM5ODRhYy00Yzk3/LTQ4ZTYtYjc1MC04/YjAxOTc0OGY1YmZf/NTgweC5qcGc_dj0x/NjM5NjAxOTU0" },

    // Lighting
    { id: 7, name: "LED Aquarium Light", price: "$45", category: "Lighting", image: "https://images-na.ssl-images-amazon.com/images/I/71CpM8CfwkL._AC_SL1000_.jpg" },
    { id: 8, name: "RGB Smart Light", price: "$65", category: "Lighting", image: "https://imgs.search.brave.com/VtbBSLqc8sGonLQTfygK6wSDOXjsXMzGlizywLSbe8g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE4RHY5VTNCZUwu/anBn" },
    { id: 9, name: "Basic LED Strip", price: "$25", category: "Lighting", image: "https://lw-cdn.com/images/573FEFA092E0/k_623179f093ebf4ac5a417b6bc16dca21;w_431;h_431;q_90/7601298.webp" },

    // Filters
    { id: 10, name: "Canister Filter", price: "$89", category: "Filters", image: "https://imgs.search.brave.com/1oKVOWa-DrR_KppmaWkPQrnPh0P4l-CnVjraWOcyyos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFhRXZPNkh5R0wu/anBn" },
    { id: 11, name: "Hang-on-Back Filter", price: "$35", category: "Filters", image: "https://shop.glassaqua.com/cdn/shop/files/Mighty-Aquarium-MG-02-Hang-On-Back-Filter-1_42bd8db9-74bf-45ee-b7b8-793e29784d8f.jpg?v=1731434031&width=1800" },
    { id: 12, name: "Sponge Filter", price: "$15", category: "Filters", image: "https://imgs.search.brave.com/AVroE2_9DX1CxJ0SkuLeD3Rte1Bcaa5YRtVd2jE97f8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/cml1bXN0b3JlZGVw/b3QuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy80MW9aVllneUtx/TC5fU0w1MDBfLndl/YnA" },

    // Decorations
    { id: 13, name: "Natural Driftwood", price: "$22", category: "Decor", image: "https://imgs.search.brave.com/ZuY0Q9WHdqgpa8vkiGuwqLn161WiKrsCAL0xtBC1QOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW5k/ZW5hcXVhLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9EU0MwNTgx/Mi5qcGc_dj0xNjcz/ODQ5MDAwJndpZHRo/PTUzMw" },
    { id: 14, name: "Rock Cave", price: "$18", category: "Decor", image: "https://imgs.search.brave.com/9gf-2stLuDDkuNvqi5cdBmbirG77Bt6UyBKC8VQo8pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTF5eDZIWkFrYUwu/anBn" },
    { id: 15, name: "Colorful Gravel", price: "$12", category: "Decor", image: "https://imgs.search.brave.com/GlzHJ20GNatRHYUM_jQri9TfSyIcFVPbuItNYeV-VpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzY0/NjgyL3BleGVscy1w/aG90by03NjQ2ODIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw" },

    // Tanks
    { id: 16, name: "10 Gallon Starter Kit", price: "$99", category: "Tanks", image: "https://imgs.search.brave.com/PRfn6fxaf0qm3IpMzgNQ2JHCqik7XKvysXfIrxoJt_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFKVzVEVFk0VUwu/anBn" },
    { id: 17, name: "20 Gallon Aquarium", price: "$149", category: "Tanks", image: "https://imgs.search.brave.com/K1HazuZ9_kY0By2ePfMrmULhj31NqNAcNBkn-xSbo-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXNo/bGFiLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9T/ZXJlbmUtMTMtR2Fs/bG9uLUFxdWFyaXVt/LVN0YXJ0ZXItS2l0/LmpwZw" },
    { id: 18, name: "5 Gallon Nano Tank", price: "$65", category: "Tanks", image: "https://imgs.search.brave.com/Q6HT_UMW055JpsvpZUTGQwwiGrwKSvxEegLkbkodf_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeWNkbi5u/ZXQvcy9maWxlcy8x/LzA1OTUvNTgwMC8y/ODg3L2ZpbGVzL0h5/Z2dlcl84LUdhbGxv/bl9HbGFzc19BcXVh/cml1bV9LaXRfNDgw/eDQ4MC5qcGc_dj0x/NjYxODMwMzE1" }
];

function ProductsPage() {
    const navigate = useNavigate();
    const categories = [...new Set(allProducts.map(product => product.category))];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-bold text-green-800">Aquarium Products</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                    ← Back to Services
                </button>
            </div>

            {/* Category Filters */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg">All</button>
                    {categories.map(category => (
                        <button
                            key={category}
                            className="px-4 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg transition"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                {product.category}
                            </span>
                            <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
                            <p className="text-green-700 font-bold text-xl mt-2">{product.price}</p>
                            <div className="mt-4 flex space-x-2">
                                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm font-semibold transition">
                                    View Details
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-semibold transition">
                                    Contact to Buy
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductsPage;