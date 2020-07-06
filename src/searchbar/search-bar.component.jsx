import React from "react";

import "./search-bar.style.css";

export const Searchbox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
