import React from "react";

import { useContext } from "react";
import { OWContext } from "../../contexts/OWContext";

import sun_icon from "../../Assets/SVG/sun_flat.svg";
import clouds_icon from "../../Assets/SVG/sun_behind_large_cloud_flat.svg";
import rain_icon from "../../Assets/SVG/cloud_with_rain_flat.svg";
import thunder_icon from "../../Assets/SVG/cloud_with_lightning_flat.svg";
import snow_icon from "../../Assets/SVG/cloud_with_snow_flat.svg";

function DailyForecast() {
    const { OWData } = useContext(OWContext);
    let daysData = [];
    let daysIcons = [];

    // Getting data for each day

    for (let i = 0; i < OWData.daily.length - 1; i++) {
        let dayInfo = {
            day: new Date(OWData.daily[i].dt * 1000).toLocaleString("en-US", {
                weekday: "short",
            }),
            weather: OWData.daily[i].weather[0].main,
            maxTemp: Math.round(OWData.daily[i].temp.max),
            minTemp: Math.round(OWData.daily[i].temp.min),
        };

        daysData.push(dayInfo);
    }

    // Setting icons for each day

    for (let i = 0; i < daysData.length; i++) {
        switch (OWData.daily[i].weather[0].main) {
            case "Clear":
                daysIcons[i] = sun_icon;
                break;
            case "Clouds":
                daysIcons[i] = clouds_icon;
                break;
            case "Rain":
                daysIcons[i] = rain_icon;
                break;
            case "Thunderstorm":
                daysIcons[i] = thunder_icon;
                break;
            case "Snow":
                daysIcons[i] = snow_icon;
                break;
            default:
                daysIcons[i] = sun_icon;
        }
    }

    return (
        <div className="daily-forecast">
            <ul className="daily-forecast__list flex">
                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[0].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[0]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[0].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[0].minTemp}°
                        </span>
                    </div>
                </li>

                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[1].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[1]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[1].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[1].minTemp}°
                        </span>
                    </div>
                </li>

                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[2].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[2]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[2].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[2].minTemp}°
                        </span>
                    </div>
                </li>

                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[3].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[3]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[3].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[3].minTemp}°
                        </span>
                    </div>
                </li>

                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[4].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[4]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[4].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[4].minTemp}°
                        </span>
                    </div>
                </li>

                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[5].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[5]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[5].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[5].minTemp}°
                        </span>
                    </div>
                </li>

                <li className="daily-forecast__item flex flex-column">
                    <div className="daily-forecast__item__date">
                        {daysData[6].day}
                    </div>

                    <div className="daily-forecast__item__icon">
                        {<img src={daysIcons[6]} alt="" />}
                    </div>

                    <div className="daily-forecast__item__temp flex">
                        <span className="daily-forecast__item__temp__max">
                            {daysData[6].maxTemp}°
                        </span>

                        <span className="daily-forecast__item__temp__min">
                            {daysData[6].minTemp}°
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default DailyForecast;
