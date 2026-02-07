import { useNavigate } from 'react-router-dom';
import consClean from './assets/images/cons_clean.jpg';
import consCoral from './assets/images/cons_coral.jpg';

function ConservationPage() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-10 text-center text-green-800">Marine Conservation</h2>

            <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/2">
                    <img
                        src={consClean}
                        alt="Clean Ocean"
                        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
                    />
                    <img
                        src={consCoral}
                        alt="Coral Reef"
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="md:w-1/2 space-y-8 text-lg text-gray-700 leading-relaxed">
                    <div>
                        <h3 className="text-2xl font-bold text-green-700 mb-2">Why Conservation Matters?</h3>
                        <p>
                            The ocean covers over 70% of our planet and provides at least 50% of the oxygen we breathe. However, human activities like pollution, overfishing, and climate change are threatening marine ecosystems.
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                        <h3 className="text-xl font-bold text-green-700 mb-4">How You Can Help?</h3>
                        <ul className="space-y-4 list-disc list-inside">
                            <li><strong>Reduce Plastic Use:</strong> Use reusable bags and bottles. Plastics are the #1 pollutant in our oceans.</li>
                            <li><strong>Sustainable Seafood:</strong> Choose seafood that is sustainably sourced to prevent overfishing.</li>
                            <li><strong>Don't Buy Coral Souvenirs:</strong> Support the protection of coral reefs by not purchasing items made from marine life.</li>
                            <li><strong>Conserve Water:</strong> Less water use means less wastewater flowing into the ocean.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-green-700 mb-2">Our Commitment</h3>
                        <p>
                            At Appu's Aquarium, we pledge to educate every visitor about the importance of marine life. A portion of our proceeds goes towards local beach cleanup initiatives in Tamil Nadu.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConservationPage;