import { OWContext } from "../contexts/OWContext";
import { useContext, useState, useEffect } from "react";

import sun_icon from "../assets/SVG/sun_flat.svg";
import clouds_icon from "../assets/SVG/cloud_flat.svg";
import rain_icon from "../assets/SVG/cloud_with_rain_flat.svg";
import thunder_icon from "../assets/SVG/cloud_with_lightning_flat.svg";
import snow_icon from "../assets/SVG/cloud_with_snow_flat.svg";

import clear_bg from "../assets/Img/clear.webp";
import cloudy_bg from "../assets/Img/cloudy.webp";
import rainy_bg from "../assets/Img/rainy.webp";
import thunderstorm_bg from "../assets/Img/thunderstorm.webp";
import snowy_bg from "../assets/Img/snowy.webp";

function CurrentSection({ className }) {
    const { OWData, localName } = useContext(OWContext);

    // Setting icon for current weather

    const [activeIcon, setActiveIcon] = useState(sun_icon);
    const [bg_img, setBgImg] = useState("clear");

    let icon = sun_icon;
    let bg = "clear";

    switch (OWData.current.weather[0].main) {
        case "Clear":
            icon = sun_icon;
            bg = clear_bg;
            break;
        case "Clouds":
            icon = clouds_icon;
            bg = cloudy_bg;
            break;
        case "Rain":
            icon = rain_icon;
            bg = rainy_bg;
            break;
        case "Thunderstorm":
            icon = thunder_icon;
            bg = thunderstorm_bg;
            break;
        case "Snow":
            icon = snow_icon;
            bg = snowy_bg;
            break;
        default:
            icon = sun_icon;
            bg = clear_bg;
    }

    useEffect(() => {
        setActiveIcon(icon);
        setBgImg(bg);
    }, [OWData]);

    // Setting current time

    const [date, setDate] = useState(new Date());

    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let min = date.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }

    // Updating time every second

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
            <div className="section-current__bg-box">
                <img
                    className="section-current__bg-img"
                    src={bg_img}
                    alt="weather_bg"
                />
            </div>

            <div
                className="section-current__main-content flex flex-column"
                style={{
                    color:
                        OWData.current.weather[0].main === "Snow"
                            ? "#57caf9"
                            : "",
                }}
            >
                <img
                    src={activeIcon}
                    alt="temperature icon"
                    className="section-current__content__icon"
                />

                <h2 className="section-current__content__temperature">
                    <span>{Math.floor(OWData.current.temp)}</span>°
                </h2>
                <p className="section-current__content__description">
                    {localName}
                </p>
            </div>

            <div
                className="section-current__complementary_content flex flex-column"
                style={{
                    color:
                        OWData.current.weather[0].main === "Snow"
                            ? "#57caf9"
                            : "",
                }}
            >
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
