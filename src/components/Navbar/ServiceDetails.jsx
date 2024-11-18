import { useRef } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const Data=useLoaderData()
    console.log(Data)
    const { id, s_name } = useParams()

    return (
        <div>
            <h2 className="font-semibold text-3xl text-center">{s_name}</h2>

        </div>
    );
};

export default ServiceDetails;