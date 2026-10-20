import { GEO_URL, FORECAST_URL } from "./config.js";
import { toFahrenheit, toMph, round } from "./convert.js";
import getPackingAdvice from "./advice.js";

export async function getCoordinates(city) {
    const response = await fetch(`${GEO_URL}?name=${city}&count=1`);
    if (!response.ok) {
        throw new Error(`Error: Status ${response.status}`);
    }
    const data = await response.json();
    if (!data.results) {
        throw new Error(`City not found: ${city}`)
    }

    const { name, country, latitude, longitude } = data.results[0];
    return { name, country, latitude, longitude };
}

export async function getTripReport(city) {
    const { name, country, latitude, longitude } = await getCoordinates(city);
    const response = await fetch(`${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
    if (!response.ok) {
        throw new Error(`Forecast request failed with status ${response.status}`);
    }
    const data = await response.json();

    return { 
        city: name, 
        country, 
        tempC: data.current.temperature_2m, 
        windKmh: data.current.wind_speed_10m, 
        maxC: data.daily.temperature_2m_max[0], 
        minC: data.daily.temperature_2m_min[0]
    };
}

export function printReport(report) {
    
    const { city, country, tempC, windKmh, maxC, minC } = report;

    console.log(`${city}, ${country} | ${round(tempC)}°C (${round(toFahrenheit(tempC))}°F) | Wind ${round(windKmh)} km/h (${toMph(windKmh)} mph) | Today: ${round(minC)}-${round(maxC)}°C | ${getPackingAdvice(tempC)}`);
}

export async function compareCities(cities) {
    const results = await Promise.all(
        cities.map(async (city) => {
            try {
                return await getTripReport(city);
            } catch (error) {
                console.log(`Skipping ${city}: ${error.message}`);
                return null;
            }
        })
    );

    const reports = results
        .filter((report) => report !== null)
        .sort((a, b) => b.tempC - a.tempC);

    reports.forEach((report, i) => {
        console.log(`${i + 1}. ${report.city} ${round(report.tempC)}°C`);
    });

    return reports;
}