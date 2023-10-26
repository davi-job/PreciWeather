function InfoSection({ className }) {
    return (
        <div className={`section-info grid ${className ? className : ""}`}>
            <div className="section-info__current flex flex-column">
                <div className="section-info__current__general"></div>

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
            </div>

            <div className="section-info__forecast flex flex-column"></div>
        </div>
    );
}
export default InfoSection;
