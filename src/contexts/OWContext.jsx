import { createContext, useState, useEffect } from "react";

export const OWContext = createContext();

let lat = -7.225684;
let lon = -39.320131;

export const OWProvider = ({ children, setFetched }) => {
    const [OWData, setOWData] = useState({});
    const [local, setLocal] = useState({
        lat: lat,
        lon: lon,
    });
    const [localName, setLocalName] = useState("Juazeiro do Norte, CE");

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
