import React from "react";

import { useContext } from "react";
import { OWContext } from "../../contexts/OWContext";

function GeneralInfoCard() {
    const OWData = useContext(OWContext);

    // Sunrise time treatment

    let sunrise = new Date(OWData.current.sunrise * 1000);
    const sunriseHours = sunrise.getHours();
    let sunriseMinutes = sunrise.getMinutes();
    if (sunriseMinutes < 10) {
        sunriseMinutes = `0${sunriseMinutes}`;
    }

    sunrise = `${sunriseHours}:${sunriseMinutes}`;

    // Sunset time treatment

    let sunset = new Date(OWData.current.sunset * 1000);
    const sunsetHours = sunset.getHours();
    let sunsetMinutes = sunset.getMinutes();
    if (sunsetMinutes < 10) {
        sunsetMinutes = `0${sunsetMinutes}`;
    }

    sunset = `${sunsetHours}:${sunsetMinutes}`;

    return (
        <div className="section-info__current__general grid grid-2-cols">
            <div className="section-info-general__column flex flex-column">
                <div className="section-info-general__info-card grid">
                    <p className="info-card__icon">💧</p>
                    <p className="info-card__title">Humidity</p>
                    <p className="info-card__value">
                        {OWData.current.humidity}%
                    </p>
                </div>

                <div className="section-info-general__info-card grid">
                    <p className="info-card__icon">😎</p>
                    <p className="info-card__title">UV Index</p>
                    <p className="info-card__value">
                        {OWData.current.uvi} of 10
                    </p>
                </div>
            </div>

            <div className="section-info-general__column flex flex-column">
                <div className="section-info-general__info-card grid">
                    <p className="info-card__icon">🌞</p>
                    <p className="info-card__title">Sunrise</p>
                    <p className="info-card__value">{sunrise}</p>
                </div>

                <div className="section-info-general__info-card grid">
                    <p className="info-card__icon">☀️</p>
                    <p className="info-card__title">Sunset</p>
                    <p className="info-card__value">{sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default GeneralInfoCard;
