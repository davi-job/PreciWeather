import React, { useState, useRef, useEffect, useContext } from "react";
import { OWContext } from "../contexts/OWContext";

function Header({ className }) {
    const { setLocalName, setLocal } = useContext(OWContext);

    const [searchValue, setSearchValue] = useState("");

    const [mobileSearchOpened, setMobileSearchOpened] = useState(false);

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

    const mobileCompleteRef = useRef();
    const mobileInputRef = useRef();

    const options = {
        fields: ["address_components", "geometry"],
        types: ["locality"],
    };

    // Desktop search

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );

        autoCompleteRef.current.addListener("place_changed", async function () {
            setSearchValue("");

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

    // Mobile search

    useEffect(() => {
        mobileCompleteRef.current = new window.google.maps.places.Autocomplete(
            mobileInputRef.current,
            options
        );

        mobileCompleteRef.current.addListener(
            "place_changed",
            async function () {
                setMobileSearchOpened(false);
                setSearchValue("");

                const place = await mobileCompleteRef.current.getPlace();

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

                setLocalName(
                    `${place.address_components[0].long_name}, ${state}`
                );
                setLocal({ lat: lat, lon: lng });

                console.log(
                    `${place.address_components[0].long_name}, ${state}`
                );
                console.log(`Lat: ${place.geometry.location.lat()}`);
                console.log(`Lng: ${place.geometry.location.lng()}`);
            }
        );
    }, []);

    ////////////////////////////////////////

    return (
        <>
            <header
                className={`header flex flex-center ${
                    className ? className : ""
                }`}
            >
                <h1 className="header-title">PreciWeather</h1>

                <button
                    className="header__mobile-search-btn"
                    onClick={() => setMobileSearchOpened(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32"
                    >
                        <path d="M 12.984375 3.0332031 C 7.4822057 3.0332031 3 7.515413 3 13.017578 C 3 18.519743 7.4822057 23.001953 12.984375 23.001953 C 14.737283 23.001953 16.384449 22.543996 17.818359 21.746094 C 18.418658 23.416554 19.665477 25.138369 21.125 26.640625 C 22.898294 28.465838 24.909333 30 27 30 C 27.829487 30 28.630841 29.759785 29.195312 29.195312 C 29.759785 28.63084 30 27.829487 30 27 C 30 24.896889 28.430417 22.900726 26.59375 21.136719 C 25.07854 19.681452 23.360869 18.442123 21.726562 17.830078 C 22.516787 16.401383 22.96875 14.761396 22.96875 13.017578 C 22.96875 7.515413 18.486544 3.0332031 12.984375 3.0332031 z M 12.984375 5.0332031 C 17.405665 5.0332031 20.96875 8.5962913 20.96875 13.017578 C 20.96875 17.438865 17.405665 21.001953 12.984375 21.001953 C 8.5630852 21.001953 5 17.438865 5 13.017578 C 5 8.5962913 8.5630852 5.0332031 12.984375 5.0332031 z M 20.521484 19.542969 C 21.705728 19.875535 23.659271 21.091672 25.208984 22.580078 C 26.854318 24.160321 28 26.103111 28 27 C 28 27.470513 27.891777 27.670723 27.78125 27.78125 C 27.670723 27.891777 27.470513 28 27 28 C 26.090667 28 24.14105 26.876834 22.558594 25.248047 C 21.060011 23.705589 19.848699 21.749903 19.539062 20.529297 C 19.888795 20.223643 20.217164 19.89389 20.521484 19.542969 z"></path>
                    </svg>
                </button>

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

            <div
                className={`header__mobile-search ${
                    mobileSearchOpened ? "active" : ""
                }`}
            >
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        ref={mobileInputRef}
                        placeholder="Enter city name..."
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </form>
                <div
                    className="close-detection"
                    onClick={() => setMobileSearchOpened(false)}
                ></div>
            </div>
        </>
    );
}

export default Header;
