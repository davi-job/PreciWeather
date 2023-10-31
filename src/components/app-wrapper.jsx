import React from "react";

import { useContext } from "react";
import { OWContext } from "../contexts/OWContext.jsx";

function AppWrapper({ children, className }) {
    let { OWData } = useContext(OWContext);

    let currentWeather = OWData.current.weather[0].main;

    return <div className={`app-wrapper ${currentWeather}`}>{children}</div>;
}

export default AppWrapper;
