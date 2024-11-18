import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data }) => {
    const { id, image, service_name, category, description, pricing, rating, counselor, tags } = data;

    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                    className='h-80 object-cover'
                        src={image}
                        alt={service_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <h2 className="card-title">{category}</h2>
                        <h2 className="card-title">{pricing}</h2>
                    </div>
                        <h2 className="card-title">{counselor}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${service_name}`} className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;