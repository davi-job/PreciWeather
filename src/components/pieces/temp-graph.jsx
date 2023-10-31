import { useContext, useState } from "react";
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

// Element

function TempGraph() {
    let { OWData } = useContext(OWContext);

    // Set primary and secondary color values based on weather condition

    let primaryColor, secondaryColor;

    switch (OWData.current.weather[0].main) {
        case "Clear":
            primaryColor = "#ff8a9c";
            secondaryColor = "#fff7b0";
            break;
        case "Clouds":
            primaryColor = "#ff7700";
            secondaryColor = "#ffe942";
            break;
        case "Rain":
            primaryColor = "#003aad";
            secondaryColor = "#84c6ff";
            break;
        case "Thunderstorm":
            primaryColor = "#040082";
            secondaryColor = "#3474ff";
            break;
        case "Snow":
            primaryColor = "#898989";
            secondaryColor = "#c1c1c1";
            break;
        default:
            primaryColor = "#0099ff";
            secondaryColor = "#8ad6ff";
    }

    // Chart data

    const data = [
        {
            hour: new Date(OWData.hourly[1].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[1].temp),
        },
        {
            hour: new Date(OWData.hourly[2].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[2].temp),
        },
        {
            hour: new Date(OWData.hourly[3].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[3].temp),
        },
        {
            hour: new Date(OWData.hourly[4].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[4].temp),
        },
        {
            hour: new Date(OWData.hourly[5].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[5].temp),
        },
        {
            hour: new Date(OWData.hourly[6].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[6].temp),
        },
        {
            hour: new Date(OWData.hourly[7].dt * 1000).getHours() + "h",
            temp: Math.floor(OWData.hourly[7].temp),
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
