import { Link } from "react-router-dom";

function Card({ resData }) {
  const { name, cuisines, rating, costForTwo, cloudinaryImageId } = resData;

  return (
    <Link to={`/view-restaurant/${resData.$id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b-2 ">
          <img
            src={cloudinaryImageId}
            alt={name}
            className="w-full h-48 object-cover p-2 rounded-sm "
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{cuisines.join(", ")}</p>
          <div className="mt-2 flex justify-between">
            <div className="flex items-center">
              <span className="text-gray-600">Rating:</span>
              <span className="ml-1 text-gray-800 font-medium">{rating}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Cost For Two:</span>
              <span className="ml-1 text-gray-800 font-medium">
                {costForTwo}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
