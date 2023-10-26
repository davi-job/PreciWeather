function CurrentSection({ className }) {
    return (
        <div className={`section-current flex ${className ? className : ""}`}>
            <img className="section-current__bg" src="" alt="" />

            <div className="section-current__main-content flex flex-column">
                <div className="section-current__content__icon">☀️</div>
                <h2 className="section-current__content__temperature">
                    <span>13</span>°
                </h2>
                <p className="section-current__content__description">
                    Juazeiro do Norte, CE
                </p>
            </div>

            <div className="section-current__complementary_content flex flex-column">
                <p className="section-current__complementary_content__description">
                    Clear
                </p>
                <p className="section-current__complementary_content__time">
                    7:50am
                </p>
            </div>
        </div>
    );
}
export default CurrentSection;
