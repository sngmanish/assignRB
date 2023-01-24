import React from "react";
import { VscBold, VscSearch } from "react-icons/vsc";
import "../../../Style/Header.css"

const Header = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search term: ${searchTerm}`);
    // Perform API call or other search logic here
  };

  return (
    <nav>
      <div className="tvlogo"> TV MAZE </div>
      <div>
        <form onSubmit={handleSubmit}>
          <span>
            {/* <VscSearch size={20} fontWeight={VscBold} /> */}
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
