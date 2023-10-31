import React from "react";

import { useContext } from "react";
import { OWContext } from "../../contexts/OWContext";

function RainfallInfoCard() {
    const { OWData } = useContext(OWContext);

    // calculate sum of the rainfall for the next 7 days

    let rainfall = 0;

    for (let i = 0; i < 7; i++) {
        if (OWData.daily[i].rain) {
            rainfall += OWData.daily[i].rain;
        }
    }

    rainfall = rainfall.toFixed(2);

    // calculate sum of the snowfall for the next 7 days

    let snowfall = 0;

    for (let i = 0; i < 7; i++) {
        if (OWData.daily[i].snow) {
            snowfall += OWData.daily[i].snow;
        }
    }

    snowfall = snowfall.toFixed(2);

    return (
        <div className="section-info__current__rainfall flex flex-center">
            <div className="section-info__current__rainfall__value flex flex-column">
                <p className="title">7-day rainfall</p>
                <p>{rainfall}mm</p>
            </div>
            <div className="section-info__current__rainfall__percentage flex flex-column">
                <p className="title">7-day snowfall</p>
                <p>{snowfall}mm</p>
            </div>
        </div>
    );
}

export default RainfallInfoCard;
