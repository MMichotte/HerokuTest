const env = Object.freeze({...process.env});

module.exports = {
    dev: {
        dialect: 'postgres',
        username: env.POSTGRES_USER,
        password: env.POSTGRES_PASSWORD,
        database: env.POSTGRES_DB,
        host: env.POSTGRES_HOST,
        port: env.POSTRES_PORT,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: 'postgres', 
        password: 'postgres',
        database: 'my_garage_test', 
        host: 'localhost',
        port: '5432', 
        dialect: 'postgres',
    },
    prod: {
        dialect: 'postgres',
        url: env.DATABASE_URL,
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
};
