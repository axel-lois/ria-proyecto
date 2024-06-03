const express = require('express');
const cors = require('cors');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();

app.use(cors());

app.all('/api/*', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:8080' });
});

app.listen(5000, () => {
  console.log('Proxy server listening on port 5000');
});
