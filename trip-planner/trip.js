import { compareCities, printReport } from "./weather.js";

const cities = ['Paris', 'Tokyo', 'Cairo'];

try {
    const reports = await compareCities(cities);
    printReport(reports[0]);
} catch (error) {
    console.log("Error: Trip report could not be fetched.");
} finally {
    console.log("Trip report complete.");
}