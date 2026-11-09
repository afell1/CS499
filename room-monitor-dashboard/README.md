## Project Title
SECS Room Condition and Monitoring Dashboard
## Project Description
This application is a web-based dashboard which will be used to display temperature and humidity readings from different rooms throughout the School of Engineering and Computer Science. This includes current readings as well as readings from the past thirty days. Although the application cannot directly address temperature and humidity issues, it will function as a monitoring device, and the data can be used as evidence in case of building maintenance requests.
## Target Users
SECS faculty, staff, and students.
## Core Features
- Temperature and humidity monitoring
- Visualization for temperature and humidity trends
- Historical data tracking and visualization
- Alerts or indicators for conditions outside specified ranges
## Project Scope
This project will be an appropriate size to complete in approximately 8 weeks because it focuses on developing the dashboard interface rather than an entire building monitoring system. 

Essential functionality includes displaying current room conditions, historical room conditions through charts, and visually identifying readings outside the specified acceptable ranges. 

Features that may be added on later on include ability for filtering data by room and date, better visual markers for readings (such as a marker on a birds-eye map of Koch), and comparing trends between rooms.
Initial UI Sketch
## Initial UI Sketch
<img width="2111" height="1646" alt="SECS Room Condition   Monitoring" src="https://github.com/user-attachments/assets/1f501bde-0e29-4b5c-ae5c-2af758ed32d0" />

## Initial Data Requirements
- Temperature readings: The temperature in °F recorded for each monitored room.
- Humidity readings: The relative humidity recorded in RH% for each monitored room.
- Acceptable data ranges: The temperature and humidity ranges used to identify out-of-range readings.
- Room identification: Room associated with each set of readings.
- Timestamps: Date and time of each reading.

## Live Prototype Link
[View the SECS Room Condition Monitoring Dashboard](https://afell1.github.io/SECS-Room-Condition-Monitoring-Dashboard/)

## Setup & Run Instructions
1. Download or clone the project from GitHub.
2. Open the project folder and terminal.
3. Install the required dependencies: ```npm install```
4. Start the application: ```npm run dev```
5. Open the local URL provided in the terminal in your web browser.

## Component Overview & Mock Data
The prototype currently uses mock data stored in `data.js` to simulate sensor readings.

- **readings:** Array of temperature and humidity readings. Each reading includes an ID, room, temperature (°F), relative humidity (%), and timestamp.
- **rooms:** Array of monitored rooms used to populate the room selection dropdown.
