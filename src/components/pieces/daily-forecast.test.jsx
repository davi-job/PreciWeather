describe("daily-forecast.jsx", () => {
    it("should return the correct day of the week", () => {
        const OWData = {
            daily: [
                {
                    dt: 1631870400, // September 17, 2021
                    weather: [{ main: "Clouds" }],
                    temp: { max: 25, min: 20 },
                },
            ],
        };
        const dayInfo = {
            day: "Fri",
            weather: "Clouds",
            maxTemp: 25,
            minTemp: 20,
        };
        expect(getDayInfo(OWData, 0)).toEqual(dayInfo);
    });

    it("should round the temperature to the nearest integer", () => {
        const OWData = {
            daily: [
                {
                    dt: 1631870400, // September 17, 2021
                    weather: [{ main: "Clouds" }],
                    temp: { max: 25.5, min: 20.3 },
                },
            ],
        };
        const dayInfo = {
            day: "Fri",
            weather: "Clouds",
            maxTemp: 26,
            minTemp: 20,
        };
        expect(getDayInfo(OWData, 0)).toEqual(dayInfo);
    });

    it("should return the correct day info for multiple days", () => {
        const OWData = {
            daily: [
                {
                    dt: 1631870400, // September 17, 2021
                    weather: [{ main: "Clouds" }],
                    temp: { max: 25, min: 20 },
                },
                {
                    dt: 1631956800, // September 18, 2021
                    weather: [{ main: "Rain" }],
                    temp: { max: 22, min: 18 },
                },
            ],
        };
        const dayInfo1 = {
            day: "Fri",
            weather: "Clouds",
            maxTemp: 25,
            minTemp: 20,
        };
        const dayInfo2 = {
            day: "Sat",
            weather: "Rain",
            maxTemp: 22,
            minTemp: 18,
        };
        expect(getDayInfo(OWData, 0)).toEqual(dayInfo1);
        expect(getDayInfo(OWData, 1)).toEqual(dayInfo2);
    });
});
