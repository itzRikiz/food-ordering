import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <div className="relative bg-eggplant text-white py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-800 opacity-60"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
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
            className="flex-grow p-4 rounded-2xl text-charcoal shadow-lg"
          />
        </form>
      </div>
    </div>
  );
}
