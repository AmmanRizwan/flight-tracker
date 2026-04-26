import dotenv from "dotenv";

dotenv.config();

const {
    PORT,
    NODE_ENV,
    CORS_ORIGIN,
    CORS_METHODS,
    CORS_AGE,
    CORS_CREDENTIAL,
    FLIGHT_API,
    FLIGHT_TOKEN_API,
    CLIENT_ID,
    CLIENT_SECRET,
    CLIENT_GRANT_TYPE
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

if (!FLIGHT_TOKEN_API) {
    throw new Error("FLIGHT_TOKEN_API is not set");
}

if (!CLIENT_ID) {
    throw new Error("CLIENT_ID is not set");
}

if (!CLIENT_GRANT_TYPE) {
    throw new Error("CLIENT_GRANT_TYPE is not set");
}

if (!CLIENT_SECRET) {
    throw new Error("CLIENT_SECRET is not set");
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
        API: FLIGHT_API,
        TOKEN_API: FLIGHT_TOKEN_API,
        CLIENT: {
            ID: CLIENT_ID,
            SECRET: CLIENT_SECRET,
            GRANT_TYPE: CLIENT_GRANT_TYPE,
        }
    }
}

export default config;