import { useNavigate } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: "Tank Setup",
        description: "We provide complete aquarium installation services, including tank placement, substrate setup, filtration system installation, and water conditioning. Perfect for beginners and offices.",
        icon: "🐠"
    },
    {
        id: 2,
        title: "Maintenance",
        description: "Regular scheduled maintenance to ensure your aquatic environment remains healthy. Includes water testing, filter cleaning, and algae removal.",
        icon: "🧼"
    },
    {
        id: 3,
        title: "Aquarium Cleaning",
        description: "Deep cleaning services for neglected tanks. We safely remove sludge, clean decorations, and restore clarity to your aquarium water.",
        icon: "🌊"
    },
    {
        id: 4,
        title: "Health Consultation",
        description: "Our experts diagnose fish diseases and water quality issues, offering effective treatment plans to save your aquatic life.",
        icon: "🩺"
    }
];

function ServicesShop() {
    const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-6 text-center text-green-800">Our Services</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                At Appu's Aquarium, we don't just sell fish; we ensure they thrive. Choose from our professional services below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {services.map(service => (
                    <div key={service.id} className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-green-500">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="text-green-600 font-bold hover:text-green-800 hover:underline"
                        >
                            Contact for Service &rarr;
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-center bg-gray-100 p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Looking for Products?</h3>
                <p className="text-gray-600 mb-6">Explore our wide range of fish, tanks, and accessories.</p>
                <button
                    onClick={() => navigate('/products')}
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition"
                >
                    Visit Shop
                </button>
            </div>
        </section>
    );
}

export default ServicesShop;