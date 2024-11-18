import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";

const Services = () => {
   
    const {services} = useLoaderData()
    const {category} = useParams()

    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5">
                {services.map(service => <ServiceCard key={service.id} data={service} />)}
            </div>
        </>
    );
};

export default Services;