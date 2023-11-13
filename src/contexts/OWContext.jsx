import { createContext, useState, useEffect } from "react";

export const OWContext = createContext();

export const OWProvider = ({ children, setFetched }) => {
    const [OWData, setOWData] = useState({});

    const [isFirstRender, setIsFirstRender] = useState(true);

    const [localName, setLocalName] = useState("");
    const [local, setLocal] = useState({
        lat: 0,
        lon: 0,
    });

    // get name, lat and lng from browser

    const success = (position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        // get city and state from lat and lng
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
                import.meta.env.VITE_GOOGLE_PLACES_API_KEY
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                let city;
                let state;
                let dataLat = data.results[0].geometry.location.lat;
                let dataLng = data.results[0].geometry.location.lng;

                for (
                    let i = 0;
                    i < data.results[0].address_components.length;
                    i++
                ) {
                    if (
                        data.results[0].address_components[i].types[0] ===
                            "administrative_area_level_2" ||
                        data.results[0].address_components[i].types[0] ===
                            "administrative_area_level_4"
                    ) {
                        city = data.results[0].address_components[i].long_name;
                    }
                    if (
                        data.results[0].address_components[i].types[0] ===
                        "administrative_area_level_1"
                    ) {
                        state =
                            data.results[0].address_components[i].short_name;
                    }
                }

                setLocalName(`${city}, ${state}`);
                setLocal({ lat: dataLat, lon: dataLng });

                getOWData(dataLat, dataLng);

                if (
                    city === undefined ||
                    state === undefined ||
                    dataLat === undefined ||
                    dataLng === undefined ||
                    data.results[0].address_components.length === 0 ||
                    data.results[0].address_components === undefined
                ) {
                    alert(
                        "Error getting location, setting location to Default"
                    );

                    error();
                }
            });
    };

    // set default location to São Paulo, SP

    const error = () => {
        setLocalName("São Paulo, SP");
        setLocal({ lat: -23.533773, lon: -46.62529 });

        alert("Permission not granted! Location set to São Paulo, SP");

        getOWData(-23.533773, -46.62529);
    };

    // get data in first render

    useEffect(() => {
        const fetchData = async () => {
            await getCurrentPlace();
        };

        fetchData();
    }, []);

    // get data when local changes && not in first render

    useEffect(() => {
        if (!isFirstRender) {
            getOWData(local.lat, local.lon);
        } else {
            setIsFirstRender(false);
        }
    }, [local]);

    // get data from openweathermap.org

    const getOWData = async (lat, lon) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${
                import.meta.env.VITE_OPEN_WEATHER_API_KEY
            }`
        );
        const jsonData = await response.json();

        setOWData(jsonData);
        setFetched(true);
    };

    // get current place from browser

    const getCurrentPlace = async () => {
        await navigator.geolocation.getCurrentPosition(success, error);
    };

    return (
        <OWContext.Provider
            value={{ OWData, localName, setLocalName, setLocal }}
        >
            {children}
        </OWContext.Provider>
    );
};
