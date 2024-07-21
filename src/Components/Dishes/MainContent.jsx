function MainContent({ category }) {
  if (!category) {
    return <div className="w-3/4 p-4">Select a category to see the dishes</div>;
  }

  return (
    <div className="w-3/4 p-4 shadow-lg">
      <div key={category.$id} className="mb-4 border-b pb-4">
        <h3 className="text-lg font-semibold">{category.dish_name}</h3>
        <p className="text-gray-600">{category.description}</p>
        <p className="text-gray-800 font-medium">₹{category.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">{category.rating}★</span>
          <span className="ml-2 text-gray-500">({category.votes} votes)</span>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
