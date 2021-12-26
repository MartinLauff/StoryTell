import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import app from './app';

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: path.join(__dirname, '../config.env') });

if (!process.env.DATABASE) {
  throw new Error('DATABASE must be defined');
}
if (!process.env.DATABASE_PASSWORD) {
  throw new Error('DATABASE_PASSWORD must be defined');
}

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err: any) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err?.name, err?.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('O SIGTERM RECEIVED. Shutting down gracefully.');
  server.close(() => {
    console.log('X Process terminated!');
  });
});
