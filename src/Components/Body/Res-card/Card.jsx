import { Link } from "react-router-dom";

function Card({ resData }) {
  const { name, cuisines, rating, cloudinaryImageId } = resData;

  return (
    <Link to={`/view-restaurant/${resData.$id}`} className="block">
      <div className="bg-cream rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img
          src={cloudinaryImageId}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-eggplant">
            {name}
          </h3>
          <p className="text-sm md:text-base text-charcoal mb-2">
            {cuisines.join(", ")}
          </p>

          <div className="flex items-center">
            <span className="text-orange mr-1">★</span>
            <span className="font-medium text-charcoal">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
