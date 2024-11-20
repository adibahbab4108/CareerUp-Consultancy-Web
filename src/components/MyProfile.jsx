import React, { useContext, useRef, useState } from "react";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const modalRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => modalRef.current.showModal();
    const closeModal = () => modalRef.current.close();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData(e.target);
            const name = formData.get("name");
            const photo = formData.get("photo-url");

            if (updateUserProfile) {
                await updateUserProfile({ displayName: name, photoURL: photo });
                toast.success("Profile updated successfully!");
                closeModal();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="hero min-h-screen flex justify-center items-center">
                <p className="text-lg text-teel-500">No user data available.</p>
            </div>
        );
    }

    return (
        <>
            <div className="hero bg-gradient-to-b from-gray-900 to-gray-600 min-h-screen flex items-center justify-center">

                <div className="card w-96 shrink-0 rounded-3xl p-6">
                    <div className="flex flex-col items-center">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-32 h-32 rounded-full shadow-md border-2 border-emerald-400"
                            />
                        ) : (
                            <FaUserAlt className="w-32 h-32 p-4 text-teel-500 rounded-full border-2 border-gray-300" />
                        )}
                        <h1 className="text-2xl font-bold mt-4 text-teal-300">
                            {user?.displayName || "Anonymous User"}
                        </h1>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-teal-500" />
                            <p className="text-teal-500 font-semibold">{user?.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiPhone className="text-teal-500" />
                            <p className="text-teal-500">{user?.phoneNumber || "N/A"}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            className="btn-style1 px-6 py-2 text-teal-500 hover:bg-emerald-600 hover:scale-105 transition-all"
                            onClick={openModal}
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="flex  justify-between items-center">
                            <h3 className="font-bold text-lg">Update Your Profile</h3>
                            <h3 onClick={() => closeModal()} className="btn btn-error text-white">Cancel</h3>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={user?.displayName || "Enter your name"}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update Photo</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo-url"
                                    placeholder={user?.phoneNumber || "Enter your photo url"}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className={`btn btn-primary ${isLoading ? "loading" : ""}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default MyProfile;
