import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/auth.js';
import sequelize from './sequelize/index.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function start() {
    try {
        await assertDatabaseConnectionOk();
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start()
