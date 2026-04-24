import dotenv from "dotenv";

dotenv.config();

const {
    PORT,
    NODE_ENV,
    CORS_ORIGIN,
    CORS_METHODS,
    CORS_AGE,
    CORS_CREDENTIAL,
    FLIGHT_API
} = process.env;

if (!PORT) {
    throw new Error("PORT is not set");
}

if (!NODE_ENV) {
    throw new Error("NODE_ENV is not set");
}

if (!CORS_ORIGIN) {
    throw new Error("CORS_ORIGIN is not set");
}

if (!CORS_METHODS) {
    throw new Error("CORS_METHOD is not set");
}

if (!CORS_AGE) {
    throw new Error("CORS_AGE is not set");
}

if (!CORS_CREDENTIAL) {
    throw new Error("CORS_CREDENTIAL is not set");
}

if (!FLIGHT_API) {
    throw new Error("FLIGHT_API is not set");
}

const config = {
    PORT,
    ENV: NODE_ENV,
    CORS: {
        ORIGIN: CORS_ORIGIN,
        METHODS: CORS_METHODS,
        CREDENTIAL: CORS_CREDENTIAL,
        AGE: CORS_AGE
    },
    FLIGHT: {
        API: FLIGHT_API
    }
}

export default config;