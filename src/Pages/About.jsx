import Footer from "../Components/Footer";
import Header from "../Components/Header";

const About = () => {
    return (
        <div>
            <Header />
            {/* Hero Section */}
            <div className="pt-40 pb-20  ">
    
    
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
       
    <div className="md:w-1/2 mt-10 md:mt-0 flex   justify-between md:justify-end ">
        <div>
                <img className="w-[400px] rounded-2xl"
                 src="https://images.pexels.com/photos/4449796/pexels-photo-4449796.jpeg?auto=compress&cs=tinysrgb&w=600 " alt="" />
            </div>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left ml-60">
            <h1 className="text-5xl font-bold text-socondryColor   mb-4">About Us</h1>
            <p className="text-lg  max-w-2xl">
                We are a passionate team dedicated to creating innovative solutions that make a difference. Learn more about our mission, values, and the people behind our success.
            </p>
        </div>

        {/* Image on the Right */}
        
    </div>
</div>

          
            

            {/* Mission Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-socondryColor
                     text-center mb-8">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We strive to push the boundaries of technology and creativity to deliver cutting-edge solutions for our clients.
                            </p>
                        </div>
                        <div className="bg-purple-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Focus</h3>
                            <p className="text-gray-600">
                                Our customers are at the heart of everything we do. We are committed to delivering exceptional value and service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                            <p className="text-gray-600">CTO</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
                            <p className="text-gray-600">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>

           

            <Footer />
        </div>
    );
};

export default About;