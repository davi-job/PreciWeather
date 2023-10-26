import React, { useState } from "react";

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
        <div
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
                <button type="submit">🔍</button>
            </form>
        </div>
    );
}

export default Header;
