import { useState } from "react";
import { Search } from "lucide-react";
export default function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <div className="bg-eggplant text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover the best food & drinks
        </h1>
        <p className="text-xl mb-8">Order from top restaurants in your area</p>
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
          <input
            type="text"
            placeholder="Search for restaurants or cuisines"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow rounded-r-none text-charcoal"
          />
          <button
            type="submit"
            className="rounded-l-none bg-orange hover:bg-sage"
          >
            <Search className="mr-2" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
