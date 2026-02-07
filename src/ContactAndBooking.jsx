// ContactAndBooking.jsx
import { useState } from "react";

function ContactAndBooking() {
    // Contact Form State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Service Booking State
    const [selectedService, setSelectedService] = useState(null);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleContactSubmit = e => {
        e.preventDefault();
        alert(`Thanks, ${name}! Your message has been sent.`);
        setName("");
        setEmail("");
        setMessage("");
    };

    const handleServiceBooking = e => {
        e.preventDefault();
        if (!selectedService) {
            alert("Please select a service");
            return;
        }
        alert(`Service booked: ${selectedService.title} on ${date} at ${time}`);
        setSelectedService(null);
        setDate("");
        setTime("");
    };

    const services = [
        { id: 1, title: "Tank Setup", price: 100 },
        { id: 2, title: "Monthly Maintenance", price: 50 },
        { id: 3, title: "Aquarium Cleaning", price: 75 },
        { id: 4, title: "Health Consultation", price: 50 },
        { id: 5, title: "Book an Expert", price: 30 },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Contact & Book Services</h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left Column - Contact Form */}
                <div className="p-6 bg-white rounded shadow-md">
                    <h3 className="text-2xl font-bold mb-6 text-center text-green-700">Contact Us</h3>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-semibold">Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Message:</label>
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
                                rows="4"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Column - Service Booking */}
                <div className="p-6 bg-white rounded shadow-md">
                    <h3 className="text-2xl font-bold mb-6 text-center text-green-700">Book a Service</h3>

                    {/* Service Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {services.map(service => (
                            <div
                                key={service.id}
                                onClick={() => setSelectedService(service)}
                                className={`p-4 border-2 rounded cursor-pointer text-center transition ${selectedService?.id === service.id
                                    ? 'border-green-500 bg-green-50'
                                    : 'border-gray-200 hover:border-green-300'
                                    }`}
                            >
                                <h4 className="font-semibold text-sm mb-2">{service.title}</h4>
                                <p className="text-green-600 font-bold">From ${service.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleServiceBooking} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibold">Date</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Time</label>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!selectedService}
                            className={`w-full py-2 rounded font-semibold transition ${selectedService
                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                }`}
                        >
                            {selectedService
                                ? `Book ${selectedService.title} - $${selectedService.price}`
                                : 'Select a Service to Book'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactAndBooking;