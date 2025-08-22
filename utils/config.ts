import dotenv from 'dotenv';
dotenv.config();

export const config = {
  username: process.env.LOGIN_USER || 'standard_user',
  password: process.env.LOGIN_PASS || 'secret_sauce',
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
};
