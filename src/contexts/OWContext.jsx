import { createContext, useState, useEffect } from "react";

export const OWContext = createContext();

let lat = -23.5557714;
let lon = -46.6395571;

export const OWProvider = ({ children, setFetched }) => {
    const [OWData, setOWData] = useState({});
    const [local, setLocal] = useState({
        lat: lat,
        lon: lon,
    });
    const [localName, setLocalName] = useState("São Paulo, SP");

    useEffect(() => {
        getOWData();
    }, []);

    useEffect(() => {
        getOWData();
    }, [local]);

    const getOWData = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${
                local.lat
            }&lon=${local.lon}&units=metric&appid=${
                import.meta.env.VITE_OPEN_WEATHER_API_KEY
            }`
        );
        const jsonData = await response.json();
        setFetched(true);
        setOWData(jsonData);
    };

    return (
        <OWContext.Provider
            value={{ OWData, localName, setLocalName, setLocal }}
        >
            {children}
        </OWContext.Provider>
    );
};
