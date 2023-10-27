const fs = require('fs')
const https = require('https')

/** @type {import('next').NextConfig} */
const nextConfig = {
    server: {
      https: {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem'),
      },
    },
  };

module.exports = nextConfig
