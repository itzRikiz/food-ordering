function MainContent({ category }) {
  console.log(category, "fdf");
  if (!category) {
    return <div className="w-3/4 p-4">Select a category to see the dishes</div>;
  }

  return (
    <div className="w-3/4 p-4 shadow-lg">
      {category.map((dish) => (
        <>
          <div key={dish.$id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{dish.dish_name}</h3>
            <p className="text-gray-600">{dish.description}</p>
            <p className="text-gray-800 font-medium">₹{dish.price}</p>
            <div className="flex items-center">
              <span className="text-yellow-500">{dish.rating}★</span>
              <span className="ml-2 text-gray-500">({dish.votes} votes)</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default MainContent;
