import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 p-8 min-h-screen">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
                
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
                    <ul className="text-gray-700">
                        <li className="mb-2">
                            <strong>Address:</strong> 1234 Street Name, City, State, 12345
                        </li>
                        <li className="mb-2">
                            <strong>Phone:</strong> (123) 456-7890
                        </li>
                        <li className="mb-2">
                            <strong>Email:</strong> contact@company.com
                        </li>
                    </ul>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h2>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#" className="text-blue-700 hover:text-blue-900 transition duration-300">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
