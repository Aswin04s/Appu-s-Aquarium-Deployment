// About.jsx
import './index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const images = [
    "https://content.api.news/v3/images/bin/f84846d801bd5a16317923cd5095970b",
    "https://i.pinimg.com/originals/b5/7d/14/b57d146ee5715d3d2b79d813edd57107.jpg",
    "https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/04/21154732/4-Aquarium-staff-at-the-New-England-Aquarium.jpg",
];

function About() {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    const nextSlide = () => setIndex((index + 1) % images.length)
    const prevSlide = () => setIndex((index - 1 + images.length) % images.length)

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 container">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-800">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="md:w-1/2 text-gray-700 text-lg space-y-6">
                    <p>
                        At <span className="font-semibold text-green-700">Appu's Aquarium</span>, we are passionate about bringing the wonders of aquatic life closer to you. Our mission is to educate, inspire, and conserve by showcasing diverse marine habitats and species.
                    </p>
                    <p>
                        Founded in <span className="font-semibold">2019</span>, we have grown from a small hobbyist setup into a vibrant public aquarium dedicated to marine education and conservation. Our dedicated team works tirelessly to create immersive experiences for all ages.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Diverse collection of freshwater and saltwater species.</li>
                        <li>Interactive exhibits and hands-on learning.</li>
                        <li>Sustainable practices ensuring protection of marine life.</li>
                    </ul>
                    <button
                        onClick={() => navigate('/conservation')}
                        className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
                    >
                        Learn More About Conservation
                    </button>
                </div>

                {/* Images */}
                <div className="md:w-1/2 relative">
                    <img
                        src={images[index]}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400 transition"
                        aria-label="Previous Slide"
                    >
                        &#8592;
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400 transition"
                        aria-label="Next Slide"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default About;