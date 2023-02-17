import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.toLowerCase() === "remeras") {
      const section = document.getElementById("remeras-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" onChange={handleSearch} placeholder="Buscar" className="border-none w-72" />
        <button className="bg-black text-white px-4 py-2 rounded-lg ml-4">Buscar</button>
      </form>
    </div>
  );
}

export default SearchBar;
