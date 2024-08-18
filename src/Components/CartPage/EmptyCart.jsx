const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="https://path-to-your-image" // Replace with your image link
        alt="Empty Cart"
        className="w-64 h-64"
      />
      <h2 className="mt-6 text-xl font-semibold text-gray-800">
        Your cart is empty
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        You can go to the home page to view more restaurants
      </p>
      <button className="mt-4 px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600">
        SEE RESTAURANTS NEAR YOU
      </button>
      <div className="flex items-center mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01M6 8l2 2-2 2m10-4l-2 2 2 2m-2 4H6"
          />
        </svg>
        <span>Oops! Something went wrong</span>
      </div>
    </div>
  );
};

export default EmptyCart;
