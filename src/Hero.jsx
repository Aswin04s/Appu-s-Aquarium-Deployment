function Hero() {
    return (
        <div className="relative h-150 w-full container mx-auto overflow-hidden">
            {/* Background Image */}
            <img
                src="https://wallpapers.com/images/hd/vibrant-coral-reef-in-aquarium-vycquy073iq72co0.jpg"
                alt="Colorful Fish Tanks"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

            {/* Content */}
            <div className="relative mt-10 z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Dive into the Wonders of Aquatic Life
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-xl mx-auto ">
                    Explore vibrant coral reefs and exotic aquatic life.
                </p>
                <div className="space-x-4">
                    <button
                        onClick={() => window.location.href = '/products'}
                        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-lg font-semibold transition"
                    >
                        Shop Products
                    </button>
                    <button
                        onClick={() => window.location.href = '/conservation'}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg font-semibold transition"
                    >
                        Learn Conservation
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
