import { FaUsers, FaLightbulb, FaBriefcase } from "react-icons/fa";

const About = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
            <div className="w-11/12 mx-auto lg:w-3/4">
                <h2 className="font-bold text-center text-3xl mb-3 text-teal-300 mt-16">
                    About Us
                </h2>
                <div className="grid gap-8 lg:grid-cols-3 ">
                    <div
                        className="p-8 rounded-xl text-center border border-blue-500"
                     
                    >
                        <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Our Community</h3>
                        <p>
                            We are a community of professionals and aspiring individuals, helping each other achieve career
                            excellence through mentorship and collaboration.
                        </p>
                    </div>
                   
                    <div
                        className="p-8 rounded-xl text-center border border-yellow-300"
                      
                    >
                        <FaLightbulb className="text-6xl text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                        <p>
                            Our vision is to empower individuals to take charge of their careers with confidence, by providing
                            tailored advice and cutting-edge resources.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="p-8 rounded-xl text-center border border-green-500"
                       
                    >
                        <FaBriefcase className="text-6xl text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Our Services</h3>
                        <p>
                            From career counseling to skill enhancement programs, we provide a wide range of services tailored to
                            meet your professional needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
