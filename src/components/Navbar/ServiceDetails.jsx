import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const {s_name}=useParams()

console.log(s_name)   
 return (
        <div>
            {s_name}
        </div>
    );
};

export default ServiceDetails;