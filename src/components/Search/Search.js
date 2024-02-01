import React from "react";

export default function Search ({setSearchTerm, setCategory, category}) {
    const categories = ['All', 'Name','No', 'Type' , 'Price' ]

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory)
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search-container">
        <input
        type="text"
        placeholder={`Search ${category}`}
        onChange={handleSearchChange}
        />
        <div className="dropdown">
        <button className="dropbtn">{category}</button>
        <div className="dropdown-content">
            {categories.map((category) => (
            <div key={category} onClick={() => handleCategoryChange(category)}>
                {category}
            </div>
            ))}
        </div>
        </div>
    </div>
    )
}
