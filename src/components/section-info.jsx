import GeneralInfoCard from "./pieces/general-info-card.jsx";
import RainfallInfoCard from "./pieces/rainfall-info-card.jsx";

import DailyForecast from "./pieces/daily-forecast.jsx";

function InfoSection({ className }) {
    return (
        <section className={`section-info grid ${className ? className : ""}`}>
            <div className="section-info__current flex flex-column">
                <GeneralInfoCard />

                <RainfallInfoCard />
            </div>

            <div className="section-info__forecast grid">
                <DailyForecast />
            </div>
        </section>
    );
}
export default InfoSection;
