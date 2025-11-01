import { useState } from "react";
import ServiceBooking from "./ContactAndBooking";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Thanks, ${name}! Your message has been sent.`);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="max-w-md md:max-w-lg mx-auto p-6 bg-white rounded shadow-md ">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Send
                </button>
            </form>
            
        </div>
    );
}

export default ContactForm;
