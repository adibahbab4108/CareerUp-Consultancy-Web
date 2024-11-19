import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data }) => {
    const { id, image, service_name, category, description, pricing, rating, counselor, tags } = data;

    return (
        <>
            <div className="rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                {/* Image Section */}
                <figure className="relative rounded-xl overflow-hidden shadow-inner">
                    <img
                        className="h-80 w-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                        src={image}
                        alt={service_name}
                    />
                </figure>

                <div className="mt-4 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-inner">
                    <h2 className="text-2xl font-bold text-gray-200 mb-2">{service_name}</h2>

                    <p className="text-gray-400 text-sm mb-4">{description}</p>

                    <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1 bg-gradient-to-br from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                            {category}
                        </span>
                        <span className="text-xl font-bold text-gray-200">{pricing}</span>
                    </div>
                    <h2 className="text-md font-medium text-gray-400 mb-4">By {counselor}</h2>

                    <div className="flex justify-end">
                        <Link
                            to={`/service/${id}/${service_name}`}
                            className="btn-style2">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ServiceCard;