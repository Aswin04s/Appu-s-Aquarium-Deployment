import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import ContactAndBooking from './ContactAndBooking.jsx'
import ServicesShop from './ServicesShop.jsx'
import ProductsPage from './ProductsPage.jsx'
import ConservationPage from './ConservationPage.jsx'
import CareGuide from './CareGuide.jsx'
import Cart from './Cart.jsx'

function App() {
    // Cart State
    const [cartItems, setCartItems] = useState([])

    // Load cart from local storage on initial render
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems'))
        if (savedCart) {
            setCartItems(savedCart)
        }
    }, [])

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevItems, { ...product, quantity: 1 }]
        })
        alert(`${product.name} added to cart!`)
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
        )
    }

    const clearCart = () => {
        setCartItems([])
        alert("Payment Successful! Thank you for your purchase.")
    }

    return (
        <Router>
            <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/care-guide" element={<CareGuide />} />
                <Route path="/services" element={<ServicesShop />} />
                <Route path="/contact" element={<ContactAndBooking />} />
                <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
                <Route path="/conservation" element={<ConservationPage />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />} />
            </Routes>
        </Router>
    )
}

export default App
