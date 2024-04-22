import React, { useState } from "react";

export default function Search({ setSearchQuery, searchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div style={{ width: "60%" }}>
      <input
        style={{ borderRadius: "10px", width: "100%", padding: "0px 10px" }}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
