import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, updateQuantity, clearCart }) {
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        // Simple dummy payment simulation
        const confirmPayment = window.confirm(`Total Amount is ₹${totalAmount}. Proceed to Pay?`);
        if (confirmPayment) {
            clearCart();
            navigate('/products');
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-10 text-center text-green-800">Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="text-xl text-gray-600 mb-6">Your cart is currently empty.</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
                    >
                        Start Shopping
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded shadow">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mb-4 sm:mb-0" />

                                <div className="flex-1 sm:ml-6 text-center sm:text-left">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-green-700 font-bold">₹{item.price}</p>
                                </div>

                                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                                    <div className="flex items-center border border-gray-300 rounded">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                        >-</button>
                                        <span className="px-3 py-1">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                        >+</button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 font-semibold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded shadow h-fit">
                        <h3 className="text-xl font-bold mb-6 border-b pb-2">Order Summary</h3>
                        <div className="flex justify-between mb-4 text-lg">
                            <span>Total Items:</span>
                            <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                        </div>
                        <div className="flex justify-between mb-8 text-xl font-bold text-green-800">
                            <span>Total Amount:</span>
                            <span>₹{totalAmount}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition"
                        >
                            Checkout (Dummy)
                        </button>
                        <button
                            onClick={() => navigate('/products')}
                            className="w-full mt-4 text-green-600 font-semibold hover:underline text-center block"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;
