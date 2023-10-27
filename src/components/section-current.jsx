import { OWContext } from "../contexts/OWContext";
import { useContext, useState, useEffect } from "react";

function CurrentSection({ className }) {
    const OWData = useContext(OWContext);

    const [date, setDate] = useState(new Date());

    let hour = date.getHours();
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
                <div className="section-current__content__icon">☀️</div>
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
