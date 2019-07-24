const proxy = require('express-http-proxy');
const dotenv = require('dotenv');
const app = require('express')();
const ip = require("ip");
const proxyTarget = ip.address() + ':8080/webAPI/';

dotenv.config();

app.use('/', proxy(proxyTarget));

const server = app.listen(process.env.NODE_PORT, () => {
    const port = server.address().port;
    console.log('Proxy Server running at ' + ip.address() + ':' + port);
});