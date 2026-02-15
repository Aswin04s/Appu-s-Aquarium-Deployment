import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import heroVideo from './assets/images/hero_video.mp4';

function Hero() {
    const navigate = useNavigate();
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gray-900">
            {/* Background Video Container */}
            <div className="absolute inset-0 w-full h-full">
                {/* Placeholder Image (Visible until video loads) */}
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backgroundImage: "url('/src/assets/images/cons_coral.jpg')",
                        filter: 'blur(20px)',
                        transform: 'scale(1.1)' // Prevents white edges from blur
                    }}
                ></div>

                {/* Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onCanPlayThrough={() => setIsVideoLoaded(true)}
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    Dive into the Wonders of Aquatic Life
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-xl mx-auto drop-shadow-md">
                    Explore vibrant coral reefs and exotic aquatic life.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <button
                        onClick={() => navigate('/products')}
                        className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer"
                    >
                        Shop Products
                    </button>
                    <button
                        onClick={() => navigate('/conservation')}
                        className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer"
                    >
                        Learn Conservation
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
