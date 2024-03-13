export default () => ({
  jwt_key: process.env.JWT_SECRET_KEY,
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});
