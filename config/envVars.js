const dotenv = require('dotenv');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config();

module.exports.getEnvVars = () => ({
  cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
  cloudflareZoneId: process.env.CLOUDFLARE_ZONE_ID,
  cloudflareAuthKey: process.env.CLOUDFLARE_AUTH_KEY,
  cloudflareAuthEmail: process.env.CLOUDFLARE_AUTH_EMAIL
});