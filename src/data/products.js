import goldfish from '../assets/images/product_goldfish.jpg';
import neon from '../assets/images/product_neon.jpg';
import betta from '../assets/images/product_betta.jpg';
import angel from '../assets/images/product_angel.jpg';
import flowerhorn from '../assets/images/product_flowerhorn.jpg';
import pellets from '../assets/images/product_pellets.jpg';
import worms from '../assets/images/product_worms.jpg';
import tankGlass from '../assets/images/product_tank_glass.jpg';
import tankBowl from '../assets/images/product_tank_bowl.jpg';
import plants from '../assets/images/product_plants.png';
import light from '../assets/images/product_light.jpg';
import filter from '../assets/images/product_filter.jpg';

const productsData = [
    // Fish
    { id: 1, name: "Goldfish", category: "Fish", price: 150, image: goldfish },
    { id: 2, name: "Neon Tetra", category: "Fish", price: 50, image: neon },
    { id: 3, name: "Betta Fish", category: "Fish", price: 250, image: betta },
    { id: 4, name: "Angelfish", category: "Fish", price: 300, image: angel },

    // Special Fish
    { id: 5, name: "Flowerhorn", category: "Fish", price: 1500, image: flowerhorn },

    // Food
    { id: 6, name: "Premium Fish Pellets", category: "Food", price: 120, image: pellets },
    { id: 7, name: "Dried Bloodworms", category: "Food", price: 200, image: worms },

    // Tanks
    { id: 8, name: "Glass Aquarium (5 Gal)", category: "Tanks", price: 1200, image: tankGlass },
    { id: 9, name: "Acrylic Bowl", category: "Tanks", price: 450, image: tankBowl },

    // Accessories
    { id: 10, name: "Aquarium Plants", category: "Accessories", price: 180, image: plants },
    { id: 11, name: "LED Light", category: "Accessories", price: 850, image: light },
    { id: 12, name: "Water Filter", category: "Accessories", price: 600, image: filter },
];

export default productsData;
