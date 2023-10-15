import React, { useState, useRef } from "react";

const Hero: React.FC<{ onSearch: (pattern: string) => void }> = ({ onSearch }) => {
  const [pattern, setPattern] = useState("");
  const patternRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPattern(event.target.value);
  };

  const handleSearch = () => {
    onSearch(pattern);
    if (patternRef.current) {
      patternRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero h-96 bg-cover bg-center shadow-xl bg-[url('../public/img/norwik_balls.jpeg')]">
      <div className="container mx-auto py-20">
        <h1 className="text-gray-800 text-4xl font-bold mb-4 text-center">
          What pattern would you like to learn?
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="border border-black rounded px-4 py-2 mr-2"
            placeholder="Enter pattern"
            value={pattern}
            onChange={handleInputChange}
          />
          <button
            className="bg-brand text-white px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div ref={patternRef}></div>
    </div>
  );
};

export default Hero;
