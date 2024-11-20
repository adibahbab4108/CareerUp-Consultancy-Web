
const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div
                className="w-96 rounded-xl p-8 text-center"
            >
                <h1 className="text-4xl font-bold mb-4 text-white">
                    404 - Page Not Found
                </h1>
                <p className="text-gray-300 text-lg mb-6">
                    Sorry, the page you are looking for does not exist.
                </p>
                <button
                    className="btn-style2"
                    onClick={() => window.location.href = '/'}
                >
                    Go to Homepage
                </button>
            </div>
        </div>

    );
};

export default NotFound;