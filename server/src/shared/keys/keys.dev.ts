import * as dotenv from 'dotenv';

dotenv.config();

export const DevKeys = {
  MongoUrl: process.env.MONGO_URL,
  Port: process.env.PORT || 5000,
  ApiPath: process.env.API_PATH || 'api',
  JwtSecret: process.env.JWT_SECRET,
};
