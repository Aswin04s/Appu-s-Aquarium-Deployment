// About.jsx
import './index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutTank from './assets/images/about_tank.jpg';
import aboutKids from './assets/images/about_kids.jpg';
import aboutSharks from './assets/images/about_sharks.jpg';

const sliderImages = [
    {
        url: aboutTank,
        caption: "Our Main Tank in Chennai"
    },
    {
        url: aboutKids,
        caption: "Educating the Next Generation"
    },
    {
        url: aboutSharks,
        caption: "Exotic Marine Life Collection"
    }
];

function About() {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    const nextSlide = () => setIndex((index + 1) % sliderImages.length)
    const prevSlide = () => setIndex((index - 1 + sliderImages.length) % sliderImages.length)

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 container">
            <h2 className="text-4xl font-bold mb-10 text-center text-green-800">About Appu's Aquarium</h2>

            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Text Content */}
                <div className="lg:w-1/2 text-gray-700 text-lg space-y-6">
                    <p>
                        Welcome to <span className="font-semibold text-green-700">Appu's Aquarium</span>, the premier destination for aquatic life in <strong>Tamil Nadu, India</strong>. Located in the heart of our vibrant state, we bring the mysteries of the deep ocean right to your doorstep.
                    </p>
                    <p>
                        Since opening in <span className="font-semibold">2019</span>, we have been dedicated to showcasing the rich marine biodiversity of the Indian Ocean and beyond. Our facility is not just a showroom but a sanctuary designed to educate our community about the beauty and fragility of underwater ecosystems.
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
                        <h4 className="font-bold text-xl mb-2">Why Visit Us?</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Largest collection of native Indian freshwater species.</li>
                            <li>Weekly educational workshops for school children.</li>
                            <li>Ethically sourced marine life and sustainable practices.</li>
                        </ul>
                    </div>
                </div>

                {/* Simplified Meaningful Slider */}
                <div className="lg:w-1/2 w-full relative group">
                    <div className="overflow-hidden rounded-2xl shadow-2xl h-[400px] relative">
                        <img
                            src={sliderImages[index].url}
                            alt={sliderImages[index].caption}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
                            <p className="font-semibold text-lg">{sliderImages[index].caption}</p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
                        aria-label="Previous Slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
                        aria-label="Next Slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {sliderImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full transition ${i === index ? 'bg-green-600' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;