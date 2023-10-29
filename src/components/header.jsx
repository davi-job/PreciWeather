import React, { useState } from "react";

import magnifyingGlass_icon from "../Assets/SVG/magnifying_glass_tilted_left_flat.svg";

function Header({ className }) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Do something with searchValue, like search for weather data
    };

    return (
        <header
            className={`header flex flex-center ${className ? className : ""}`}
        >
            <h1 className="header-title">PreciWeather</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={searchValue}
                    onChange={handleSearchChange}
                />
                <button type="submit">
                    <img
                        src={magnifyingGlass_icon}
                        alt="magnifying glass icon"
                    />
                </button>
            </form>
        </header>
    );
}

export default Header;
