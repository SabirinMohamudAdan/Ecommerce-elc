import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Contact = () => {
    return (
        <div>
            <Header />
            {/* Hero Section */}
            <div className="pt-40 pb-20
             ">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                    </p>
                </div>
            </div>

            {/* Contact Form and Information Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        rows="4"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-socondryColor text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                    <p className="text-gray-600">123 Main Street, City, Country</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    <p className="text-gray-600">+123 456 7890</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <p className="text-gray-600">info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

            <Footer />
        </div>
    );
};

export default Contact;