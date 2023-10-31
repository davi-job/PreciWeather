import React, { useState, useRef, useEffect, useContext } from "react";
import { OWContext } from "../contexts/OWContext";

function Header({ className }) {
    const { setLocalName, setLocal } = useContext(OWContext);

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearchValue("");
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

            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();

            let state;
            for (let i = 0; i < place.address_components.length; i++) {
                if (
                    place.address_components[i].types[0] ===
                    "administrative_area_level_1"
                ) {
                    state = place.address_components[i].short_name;
                }
            }

            setLocalName(`${place.address_components[0].long_name}, ${state}`);
            setLocal({ lat: lat, lon: lng });
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
