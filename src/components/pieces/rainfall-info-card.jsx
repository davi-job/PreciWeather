import React from "react";

function RainfallInfoCard() {
    return (
        <div className="section-info__current__rainfall flex flex-center">
            <div className="section-info__current__rainfall__value flex flex-column">
                <p className="title">Weekly Rainfall</p>
                <p>45mm</p>
            </div>
            <div className="section-info__current__rainfall__percentage flex flex-column">
                <p className="title">This Week</p>
                <p>-15%</p>
            </div>
        </div>
    );
}

export default RainfallInfoCard;
