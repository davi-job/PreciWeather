import React, { useState, useRef, useEffect } from "react";

import magnifyingGlass_icon from "../Assets/SVG/magnifying_glass_tilted_left_flat.svg";

function Header({ className }) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    };

    // Google places autocomplete //////////

    const autoCompleteRef = useRef();
    const inputRef = useRef();

    const options = {
        fields: ["address_components", "geometry"],
        types: ["locality"],
    };

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );

        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            console.log({ place });
        });
    }, []);

    ////////////////////////////////////////

    return (
        <header
            className={`header flex flex-center ${className ? className : ""}`}
        >
            <h1 className="header-title">PreciWeather</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Enter city name..."
                    value={searchValue}
                    onChange={handleSearchChange}
                />
            </form>
        </header>
    );
}

export default Header;
