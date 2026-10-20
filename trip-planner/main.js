import { toFahrenheit, toMph, round } from "./convert.js";
import getPackingAdvice from "./advice.js";
import { delay, checkIn, checkInWithRetry } from "./flight.js";
import { getTripReport, printReport, compareCities } from "./weather.js";

console.log(toFahrenheit(20), round(toMph(10)), getPackingAdvice(12));

checkIn('Ana', 100)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Check-in closed.");
    })

checkIn('Ana', 0) 
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Check-in closed.");
    })

delay() 
    .then(() => console.log("Gate opens."))
    .then(() => delay(1000))
    .then(() => console.log("Boarding."))
    .then(() => delay(1000))
    .then(() => console.log("Takeoff!"));

try {
    await checkInWithRetry('Anelise', 3, 100);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Check-in closed.");
}

try {
    await checkInWithRetry('Anelise', 5, 0);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Check-in closed.");
}

const report = await getTripReport('Evansville');
printReport(report);

await compareCities(['Oslo', 'Cairo', 'Lima']);