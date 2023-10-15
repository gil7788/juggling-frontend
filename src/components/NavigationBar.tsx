import React from "react";

const NavigationBar: React.FC = () => {
  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => scrollToComponent("hero")}>Home</button>
        <button onClick={() => scrollToComponent("pattern")}>Pattern</button>
        <button onClick={() => scrollToComponent("about")}>About</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
