# ✈️ Flight Tracker: Real-Time Aviation Tracker
Flight Tracker is a full-stack flight visualization platform that monitors live aircraft movements across the globe. By leveraging real-time transponder data and event-driven architecture, the application provides a smooth, "radar-like" experience for tracking thousands of flights simultaneously.

## 🚀 Key Technical Features
- Real-Time Data Streaming: Implemented Server-Sent Events (SSE) in Node.js to push live flight vectors to the frontend, reducing overhead compared to traditional polling.

- High-Frequency Updates: Synchronizes with the API to track icao24 identifiers, ground speeds, altitudes, and headings.

- Dynamic Geospatial Visualization: Utilizes the OpenStreetMap API (or Leaflet) to render aircraft with real-time heading rotations and interactive flight path tracing.

- Optimized Data Pipeline: Features a backend mapping utility that transforms raw 2D state vectors into typed, consumable objects for a responsive React UI.

- Efficient State Management: Handles frequent UI re-renders using optimized React hooks to ensure a stutter-free mapping experience even with 1,000+ active markers.

## Built with

The list of major framework/libraries used to bootstrap this project.

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
* ![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
* ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white)
* ![GithubAction](https://img.shields.io/badge/Github%20Actions-282a2e?style=for-the-badge&logo=githubactions&logoColor=367cfe)

## 🛠️ Tech Stack

- Frontend: React, Tailwind CSS, OpenStreetMap

- Backend: Node.js, Express

- Data Protocol: Server-Sent Events (SSE)

## Preview

<img src="./preview/readme.png">