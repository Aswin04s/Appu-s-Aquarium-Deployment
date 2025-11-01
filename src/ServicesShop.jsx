// ServicesShop.jsx
import { useNavigate } from 'react-router-dom';

const services = [
    { id: 1, title: "Tank Setup", description: "Professional aquarium setup tailored to your space." },
    { id: 2, title: "Maintenance", description: "Regular cleaning and water quality checks to keep your tank healthy." },
    { id: 3, title: "Aquarium Cleaning", description: "Deep cleaning services for your fish tank and accessories." },
];

const featuredProducts = [
    { id: 1, name: "Premium Fish Food", price: "$15", image: "https://tse2.mm.bing.net/th/id/OIP.SYhdiBmcxKKaPHf-EtoZnQHaEI?pid=Api&P=0&h=180" },
    { id: 2, name: "Aquarium Plants Pack", price: "$25", image: "http://www.snuffleandswim.com/cdn/shop/files/hugs_kisses_15.png?v=1714936323" },
    { id: 3, name: "LED Aquarium Light", price: "$45", image: "https://images-na.ssl-images-amazon.com/images/I/71CpM8CfwkL._AC_SL1000_.jpg" },
];

function ServicesShop() {
    const navigate = useNavigate();

    const handleViewProducts = () => {
        navigate('/products');
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-10 text-center text-green-800">Services & Shop</h2>

            {/* Services */}
            <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
                            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Shop Products</h3>
                    <button
                        onClick={handleViewProducts}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105"
                    >
                        View All Products
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold">{product.name}</h4>
                                <p className="text-green-700 font-bold mt-2">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesShop;