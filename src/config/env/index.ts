import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        MONGODB_URI: string;
        MONGODB_DB_MAIN: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV;

const development: IConfig = {
    port: process.env.PORT,
    database: {
        MONGODB_URI: process.env.MONGODB_URI,
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN
    },
    secret: process.env.SECRET
};

const production: IConfig = {
    port: process.env.PORT,
    database: {
        MONGODB_URI: process.env.MONGODB_URI,
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN
    },
    secret: process.env.SECRET
};

const test: IConfig = {
    port: process.env.PORT,
    database: {
        MONGODB_URI: process.env.MONGODB_URI,
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN_TEST
    },
    secret: process.env.SECRET
};

const config: { [name: string]: IConfig } = { test, development, production };

export default config[NODE_ENV];
