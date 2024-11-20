import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Feedback = () => {
    const [userFeedbacks, setSserFeedbacks] = useState([])

    useEffect(() => {
        fetch("/feedback.json")
            .then(res => res.json())
            .then(data => setSserFeedbacks(data.feedbacks))
    }, [])
    console.log(userFeedbacks)
    return (
        <>
            <div>
                <h2 className="font-bold text-3xl mb-3 text-teal-300 mt-16">Our Clients Review</h2>
                <div className="bg-gradient-to-r from-gray-900 via-purple-500 to-teal-400 text-white py-4">

                    <Marquee
                        gradient={true}
                        gradientColor="#17202E"
                        gradientWidth={300}
                        speed={50}
                        pauseOnHover={true}
                    >
                        {userFeedbacks.map((feedback) => (
                            <div
                                key={feedback.id}
                                className="flex flex-col items-center justify-center p-4 mx-2 rounded-lg bg-white  text-gray-800 w-80 h-44 "
                            >
                                <h2 className="text-lg font-bold text-purple-600">{feedback.client_name}</h2>
                                <p className="italic text-gray-600">"{feedback.comment}"</p>
                                <div className="flex flex-col  items-start gap-2 mt-2">
                                    <p className="text-yellow-400">⭐ {feedback.rating}</p>
                                    <p className="text-sm text-gray-500">{feedback.date}</p>
                                </div>
                            </div>

                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Feedback;