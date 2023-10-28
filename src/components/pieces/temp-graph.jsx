import { useContext } from "react";
import { OWContext } from "/src/contexts/OWContext.jsx";

import {
    Area,
    AreaChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    LabelList,
} from "recharts";

import React from "react";

// Get primary and secondary color variables from css file

let primaryColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--primary"
);

let secondaryColor = getComputedStyle(
    document.documentElement
).getPropertyValue("--secondary");

// Element

function TempGraph() {
    let OWData = useContext(OWContext);

    // Chart data

    const data = [
        {
            hour: new Date(OWData.hourly[1].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[1].temp),
            humidity: OWData.hourly[1].humidity,
        },
        {
            hour: new Date(OWData.hourly[2].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[2].temp),
            humidity: OWData.hourly[2].humidity,
        },
        {
            hour: new Date(OWData.hourly[3].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[3].temp),
            humidity: OWData.hourly[3].humidity,
        },
        {
            hour: new Date(OWData.hourly[4].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[4].temp),
            humidity: OWData.hourly[4].humidity,
        },
        {
            hour: new Date(OWData.hourly[5].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[5].temp),
            humidity: OWData.hourly[5].humidity,
        },
        {
            hour: new Date(OWData.hourly[6].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[6].temp),
            humidity: OWData.hourly[6].humidity,
        },
        {
            hour: new Date(OWData.hourly[7].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[7].temp),
            humidity: OWData.hourly[7].humidity,
        },
    ];

    // find the lowest and highest temp from data objects
    let lowestTemp = data[0].temp;
    let highestTemp = data[0].temp;
    for (let i = 0; i < data.length; i++) {
        if (data[i].temp < lowestTemp) {
            lowestTemp = data[i].temp;
        }
        if (data[i].temp > highestTemp) {
            highestTemp = data[i].temp;
        }
    }

    return (
        <div className="temp-graph-section">
            <p className="temp-graph-section__title">Today's temperature</p>

            <ResponsiveContainer width="100%" height={175}>
                <AreaChart
                    data={data}
                    margin={{ top: 50, right: 40, bottom: 0, left: 40 }}
                >
                    <XAxis dataKey="hour" fontSize={13} height={25} dy={6} />
                    <YAxis
                        type="number"
                        domain={[lowestTemp - 2, highestTemp]}
                        hide={true}
                    />
                    <Area
                        className="temp-graph-area"
                        dot={true}
                        type="monotone"
                        dataKey="temp"
                        strokeWidth={3}
                        stroke={primaryColor}
                        fill={secondaryColor}
                        fillOpacity={0.2}
                    >
                        <LabelList
                            dataKey="temp"
                            position="top"
                            fontSize={12}
                            fill={primaryColor}
                            dy={-5}
                        />
                    </Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TempGraph;
