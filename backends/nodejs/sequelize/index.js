import dotenv from 'dotenv';

import Sequelize from 'sequelize';

import build_user from './models/user.model.js'
import build_post from './models/post.model.js'
import applyExtraSetup from './extra-setup.js';

dotenv.config();

const DB_NAME = process.env.DB_NAME || "postgres";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const DB_HOST = process.env.DB_HOST || "db_pg"; 
const DB_PORT = process.env.DB_PORT || 5432;


const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres'
    }
);

const modelDefiners = [
	build_post,
	build_user
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

let res = sequelize.sync();
console.log('Все модели были успешно синхронизированы.');

export default sequelize;
