// ConservationPage.jsx
import { useNavigate } from 'react-router-dom';

function ConservationPage() {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                    ← Back to About Us
                </button>
                <h1 className="text-4xl font-bold text-green-800 mb-4">Conservation Efforts</h1>
                <p className="text-xl text-gray-600">Protecting aquatic life for future generations</p>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Conservation Mission</h2>
                <p className="text-gray-700 mb-6">
                    At Appu's Aquarium, we believe in the importance of preserving marine ecosystems
                    and promoting sustainable practices in the aquarium industry.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold text-green-600 mb-3">What We Do</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Support marine conservation research</li>
                            <li>• Promote sustainable fish breeding programs</li>
                            <li>• Educate visitors about ocean conservation</li>
                            <li>• Reduce plastic waste in our operations</li>
                            <li>• Partner with local conservation organizations</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-600 mb-3">How You Can Help</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Choose sustainably sourced aquarium fish</li>
                            <li>• Reduce single-use plastics</li>
                            <li>• Support marine conservation charities</li>
                            <li>• Educate others about ocean protection</li>
                            <li>• Practice responsible fish keeping</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Quick Facts</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-3 rounded shadow">
                        <strong>Coral Reefs</strong>
                        <p>Home to 25% of marine species</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <strong>Plastic Pollution</strong>
                        <p>8 million tons enter oceans yearly</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                        <strong>Sustainable Practices</strong>
                        <p>We recycle 90% of our water</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConservationPage;