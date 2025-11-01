import { useState } from "react";

const speciesData = [
    {
        id: 1,
        name: "Clownfish",
        scientificName: "Amphiprioninae",
        type: "Saltwater",
        image: "https://cdn.mos.cms.futurecdn.net/4UdEs7tTKwLJbxZPUYR3hF.jpg",
        description: "Bright orange fish popular for home aquariums, known for their symbiotic relationship with sea anemones.",
        care: {
            tankSize: "20+ gallons",
            temperature: "74-79 °F",
            diet: "Omnivore - flakes, pellets, frozen food",
            compatibility: "Peaceful with other fish"
        }
    },
    {
        id: 2,
        name: "Neon Tetra",
        scientificName: "Paracheirodon innesi",
        type: "Freshwater",
        image: "https://cdn.pixabay.com/photo/2023/07/06/10/43/fish-8110211_1280.jpg",
        description: "Small, vibrant schooling freshwater fish famous for their bright neon stripes.",
        care: {
            tankSize: "10+ gallons",
            temperature: "70-81 °F",
            diet: "Omnivore - flakes, live food",
            compatibility: "Peaceful in a community tank"
        }
    },
    {
        id: 3,
        name: "Mandarinfish",
        scientificName: "Synchiropus splendidus",
        type: "Saltwater",
        image: "https://tse4.mm.bing.net/th/id/OIP.iHZ5iMZBGDRwDMwUKuHwzQHaFi?pid=Api&P=0&h=180",
        description: "Strikingly colorful and peaceful fish prized in marine aquariums.",
        care: {
            tankSize: "30+ gallons",
            temperature: "72-78 °F",
            diet: "Carnivore - live copepods and amphipods",
            compatibility: "Needs quiet tank with peaceful neighbors"
        }
    },
    {
        id: 4,
        name: "Goldfish",
        scientificName: "Carassius auratus",
        type: "Freshwater",
        image: "https://www.fishkeepingworld.com/wp-content/uploads/2019/10/Goldfish-A-Z-Best-Types-Of-Goldfish-Single-Tail-And-Fancy-Banner.jpg",
        description: "Popular freshwater ornamental fish known for their variety of colors and shapes.",
        care: {
            tankSize: "20+ gallons",
            temperature: "65-75 °F",
            diet: "Omnivore - pellets, flakes, vegetables",
            compatibility: "Can be aggressive; keep with similar sized fish"
        }
    },
    {
        id: 5,
        name: "Betta Fish",
        scientificName: "Betta splendens",
        type: "Freshwater",
        image: "https://tse3.mm.bing.net/th/id/OIP.2U8tE6bF-LTJWTdHETOoswHaFL?pid=Api&P=0&h=180",
        description: "Known for vibrant colors and long flowing fins, often kept alone due to aggression.",
        care: {
            tankSize: "5+ gallons",
            temperature: "76-82 °F",
            diet: "Carnivore - pellets, frozen foods",
            compatibility: "Best kept solo or with peaceful species"
        }
    },
    {
        id: 6,
        name: "Angelfish",
        scientificName: "Pterophyllum scalare",
        type: "Freshwater",
        image: "https://tse1.mm.bing.net/th/id/OIP.7_yqff2ZhP3MIk4XgksrJwHaHa?pid=Api&P=0&h=180",
        description: "Elegant tall-bodied fish popular in freshwater community tanks.",
        care: {
            tankSize: "20+ gallons",
            temperature: "75-82 °F",
            diet: "Omnivore - flakes, live/frozen foods",
            compatibility: "Semi-aggressive; keep with similar sized fish"
        }
    }
];

function SpeciesSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const species = speciesData[currentIndex];

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + speciesData.length) % speciesData.length);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % speciesData.length);
    };

    return (
        <div className="max-w-xl mx-auto px-6 py-12 bg-white rounded shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Fish & Species Catalog</h2>

            <div className="flex flex-col items-center">
                <img
                    src={species.image}
                    alt={species.name}
                    className="w-64 h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{species.name}</h3>
                <div className="italic text-gray-500 mb-2">{species.scientificName}</div>
                <p className="text-center text-gray-700 mb-4">{species.description}</p>
                <ul className="text-gray-600 text-sm space-y-1 mb-6">
                    <li><strong>Type:</strong> {species.type}</li>
                    <li><strong>Tank size:</strong> {species.care.tankSize}</li>
                    <li><strong>Temperature:</strong> {species.care.temperature}</li>
                    <li><strong>Diet:</strong> {species.care.diet}</li>
                    <li><strong>Compatibility:</strong> {species.care.compatibility}</li>
                </ul>

                <div className="flex space-x-6">
                    <button
                        onClick={prevSlide}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SpeciesSlideshow;
