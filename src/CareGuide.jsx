import { Link } from 'react-router-dom';

function CareGuide() {
    const tips = [
        {
            title: "Water Quality is Key",
            content: "Regularly test your water for ammonia, nitrites, and nitrates. Perform 10-20% partial water changes weekly to keep your fish healthy."
        },
        {
            title: "Don't Overfeed",
            content: "Overfeeding produces waste that pollutes water. Feed only what your fish can consume in 2-3 minutes, once or twice a day."
        },
        {
            title: "Temperature Control",
            content: "Most tropical fish need stable temperatures between 75°F - 80°F. Use a reliable heater and checking with a thermometer."
        },
        {
            title: "Acclimation Matters",
            content: "When introducing new fish, float the bag for 15-20 minutes to equalize temperature, then slowly add tank water to the bag before releasing."
        },
        {
            title: "Compatible Tank Mates",
            content: "Research species before buying. Avoid mixing aggressive fish (like Cichlids) with peaceful community fish (like Tetras)."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">Aquarium Care Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tips.map((tip, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-cyan-500 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center">
                            <span className="text-cyan-500 text-2xl mr-2">•</span> {tip.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                    </div>
                ))}
            </div>

            {/* Contact expert section */}
            <div className="mt-16 bg-cyan-900 text-white text-center p-12 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Need Professional Help?</h3>
                <p className="mb-8 text-cyan-100 text-lg">Our experts can handle tank maintenance and health checks for you.</p>
                <Link to="/contact" className="bg-white text-cyan-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition shadow-lg">
                    Book an Expert
                </Link>
            </div>
        </section>
    );
}

export default CareGuide;
