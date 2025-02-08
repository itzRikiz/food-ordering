const categories = [
  { name: "Pizza", image: "https://placehold.co/80" },
  { name: "Burger", image: "https://placehold.co/80" },
  { name: "Sushi", image: "https://placehold.co/80" },
  { name: "Pasta", image: "https://placehold.co/80" },
  { name: "Salad", image: "https://placehold.co/80" },
  { name: "Dessert", image: "https://placehold.co/80" },
];

function FoodCategories() {
  return (
    <section className="py-8 md:py-12 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-eggplant">
          Explore Food Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 md:p-4 mb-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                />
              </div>
              <span className="font-medium text-sm md:text-base text-charcoal">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodCategories;
