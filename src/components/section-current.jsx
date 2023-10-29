import { OWContext } from "../contexts/OWContext";
import { useContext, useState, useEffect } from "react";

import sun_icon from "../assets/SVG/sun_flat.svg";
import clouds_icon from "../assets/SVG/cloud_flat.svg";
import rain_icon from "../assets/SVG/cloud_with_rain_flat.svg";
import thunder_icon from "../assets/SVG/cloud_with_lightning_flat.svg";
import snow_icon from "../assets/SVG/cloud_with_snow_flat.svg";

function CurrentSection({ className }) {
    const OWData = useContext(OWContext);

    let activeIcon;
    switch (OWData.current.weather[0].main) {
        case "Clear":
            activeIcon = sun_icon;
            break;
        case "Clouds":
            activeIcon = clouds_icon;
            break;
        case "Rain":
            activeIcon = rain_icon;
            break;
        case "Thunderstorm":
            activeIcon = thunder_icon;
            break;
        case "Snow":
            activeIcon = snow_icon;
            break;
        default:
            activeIcon = sun_icon;
    }

    const [date, setDate] = useState(new Date());

    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let min = date.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);

        hour = date.getHours();
        min = date.getMinutes();

        if (min < 10) {
            min = `0${min}`;
        }

        return function cleanup() {
            clearInterval(timer);
        };
    });

    return (
        <div className={`section-current flex ${className ? className : ""}`}>
            <img className="section-current__bg" src="" alt="" />

            <div className="section-current__main-content flex flex-column">
                <img
                    src={activeIcon}
                    alt="temperature icon"
                    className="section-current__content__icon"
                />

                <h2 className="section-current__content__temperature">
                    <span>{Math.floor(OWData.current.temp)}</span>°
                </h2>
                <p className="section-current__content__description">
                    Juazeiro do Norte, CE
                </p>
            </div>

            <div className="section-current__complementary_content flex flex-column">
                <p className="section-current__complementary_content__time">
                    {hour}:{min}
                </p>
                <p className="section-current__complementary_content__description">
                    {OWData.current.weather[0].description}
                </p>
            </div>
        </div>
    );
}

export default CurrentSection;
