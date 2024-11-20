import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ServiceDetails = () => {
    const Data = useLoaderData()
    const { image, description, counselor, category, pricing, rating, service_name, tags } = Data;
    // console.log(image, description, counselor, category, pricing, rating, service_name, tags);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const navigate = useNavigate()
    
    const handleCommentSubmit = () => {
        if (newComment.trim() !== "") {
            setComments((prev) => [...prev, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 flex items-center justify-center">
            <div className="max-w-5xl  bg-gradient-to-b from-gray-800 to-gray-700 shadow-inner rounded-2xl p-8">
            <button className="btn-style2 my-3" onClick={() => navigate(-1)}>go back</button>

                <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={image}
                        alt={service_name}
                        className="w-full h-64 object-cover shadow-md"
                    />
                </div>

                <div className="mt-6 text-gray-200">
                    <h1 className="text-3xl font-bold text-gray-100">{service_name}</h1>
                    <p className="mt-3 text-gray-300">{description}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-600 shadow-inner text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 space-y-3">
                        <p>
                            <span className="font-semibold text-gray-100">Counselor:</span>{" "}
                            {counselor}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-100">Category:</span>{" "}
                            {category}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-100">Pricing:</span>{" "}
                            {pricing}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-100">Rating:</span>{" "}
                            {rating} ⭐
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-100">Comments</h2>
                    <div className="mt-4">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write your comment..."
                            className="w-full px-4 py-2 font-semibold text-black bg-gradient-to-r from-gray-100 to-gray-400 rounded-lg "
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="mt-4 px-6 py-2 btn-style2 "
                        >
                            Comment
                        </button>
                    </div>
                    <div className="mt-6 space-y-3">
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg "
                                >
                                    {comment}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;