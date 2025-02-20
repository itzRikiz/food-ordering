const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">401</h1>
      <p className="text-xl mt-2">
        Oops! You are not authorized to access this page.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default Unauthorized;
