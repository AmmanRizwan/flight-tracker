# ✈️ Flight Tracker: Real-Time Aviation Tracker
Flight Tracker is a full-stack flight visualization platform that monitors live aircraft movements across the globe. By leveraging real-time transponder data and event-driven architecture, the application provides a smooth, "radar-like" experience for tracking thousands of flights simultaneously.

## 🚀 Key Technical Features
- Real-Time Data Streaming: Implemented Server-Sent Events (SSE) in Node.js to push live flight vectors to the frontend, reducing overhead compared to traditional polling.

- High-Frequency Updates: Synchronizes with the API to track icao24 identifiers, ground speeds, altitudes, and headings.

- Dynamic Geospatial Visualization: Utilizes the OpenStreetMap API (or Leaflet) to render aircraft with real-time heading rotations and interactive flight path tracing.

- Optimized Data Pipeline: Features a backend mapping utility that transforms raw 2D state vectors into typed, consumable objects for a responsive React UI.

- Efficient State Management: Handles frequent UI re-renders using optimized React hooks to ensure a stutter-free mapping experience even with 1,000+ active markers.

## Improvement of Flight Detail

If your device handle the load of the flight track detail more than 100 then update the following line:

```tsx
// Go to the line no. 74
// remove the `flight.slice(0, 100)`
flight && flight.map((plane, index))
```

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

## Getting Started / Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Yarn** (v4.10.3 or higher)
- **Git**

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/AmmanRizwan/flight-tracker.git
cd flight-tracker
```

#### 2. Backend Setup
```bash
# Naviagte the backend directory
cd backend

# enable corepack globally
corepack enable

# set the version
corepack use yarn@4.10.3

# Install dependencies
yarn install

# Create environment file 
cp .env.example .env

# Start development server
yarn dev
```

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# enable corepack globally
corepack enable

# set the version
corepack use yarn@4.10.3

# Install dependencies
yarn install

# Create environment file
cp .env.example .env

# Configure your .env file 
# VITE_API_URL=http://localhost:8000/v1/api

# Start development server
yarn dev
```

### Running the Application

#### 1. Start Backend Server:

```bash
cd backend
yarn dev
```
Backend will run on `http://localhost:8000`

#### 2. Start Frontend Server:

```bash
cd frontend
yarn dev
```
Frontend will run on `http://localhost:5173`

4. **Access the Application**: Open your browser and navigate to `http://localhost:5713`

### Important Notes

- **Do not commit** `.env` files or expose sensitive credentials

- Use `.env.example` as a template for required environment variables

- Ensure PostgreSQL is running before starting the backend

- For production deployment, build both frontend and backend:

```bash
# Backend
cd backend && yarn build

# Frontend
cd frontend && yarn build
```

### Project Structure

```bash
.
├── backend
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── Jenkinsfile
│   ├── package.json
│   ├── README.md
│   ├── run.sh
│   ├── src
│   │   ├── config
│   │   │   └── env.ts
│   │   ├── controller
│   │   │   └── flight
│   │   │       └── index.ts
│   │   ├── index.ts
│   │   ├── middleware
│   │   │   └── error.ts
│   │   ├── routes
│   │   │   ├── flight
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── service
│   │   │   ├── api.ts
│   │   │   └── flight
│   │   │       └── index.ts
│   │   └── util
│   │       ├── error.ts
│   │       └── logger.ts
│   ├── tsconfig.json
│   └── yarn.lock
├── frontend
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── electron-builder.json
│   ├── eslint.config.js
│   ├── icon.png
│   ├── index.html
│   ├── Jenkinsfile
│   ├── package.json
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── README.md
│   ├── run.sh
│   ├── src
│   │   ├── app
│   │   │   ├── App.scss
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   │   ├── flight-background.jpg
│   │   │   │   ├── hero.png
│   │   │   │   ├── plane.png
│   │   │   │   ├── plane.svg
│   │   │   │   ├── react.svg
│   │   │   │   └── vite.svg
│   │   │   ├── components
│   │   │   │   ├── back-button
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   ├── current-position
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   ├── custom-marker
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── feature-card
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   ├── map
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   ├── map-theme-toggle
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   ├── plane-detail
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── plane-icon
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── style.scss
│   │   │   │   └── theme-button
│   │   │   │       ├── index.tsx
│   │   │   │       └── style.scss
│   │   │   ├── interface
│   │   │   │   └── index.ts
│   │   │   ├── main.tsx
│   │   │   ├── pages
│   │   │   │   ├── flight
│   │   │   │   │   └── index.tsx
│   │   │   │   └── home
│   │   │   │       ├── home.scss
│   │   │   │       └── index.tsx
│   │   │   └── store
│   │   │       ├── index.ts
│   │   │       └── slice
│   │   │           ├── location.ts
│   │   │           └── theme.ts
│   │   └── electron
│   │       ├── main.ts
│   │       └── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vercel.json
│   ├── vite.config.ts
│   └── yarn.lock
├── .github
│   └── workflows
│       └── ci.yml
├── LICENSE
├── preview
│   └── readme.png
└── README.md

36 directories, 74 files
```

## Contact & Support

For questions, issues, or contributions:

- 📧 Email: [ammanrizwan00007@gmail.com]

## Preview

<img src="./preview/readme.png">