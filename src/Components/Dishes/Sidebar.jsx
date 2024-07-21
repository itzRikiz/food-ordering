function Sidebar({ categories, onSelectedCategory }) {
  const categoryNames = Object.values(categories);

  return (
    <div className="w-1/4 p-4 border h-80 shadow-md">
      <h2 className="text-xl font-bold  mb-4">Categories</h2>
      <ul>
        {categoryNames.map((categoryName, index) => (
          <li
            className="mb-2 cursor-pointer hover:text-blue-500 border-b"
            key={index}
            onClick={() => onSelectedCategory(categoryName)}
          >
            {categoryName.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
