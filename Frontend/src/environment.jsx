let IS_PROD = true;

const server = IS_PROD
  ? "https://tradexpertbackend.onrender.com"
  : "http://localhost:3002";

export default server;
