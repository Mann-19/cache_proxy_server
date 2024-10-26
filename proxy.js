const httpProxy = require('http-proxy');
const http = require('http');
const { Command } = require('commander');
const { error } = require('console');
const { emit } = require('process');

let cache = new Map();

const program = new Command();

const port = 8000;
const target = 'https://jsonplaceholder.typicode.com';

// Create a proxy server
const proxy = httpProxy.createProxyServer({
    target: target,
    changeOrigin: true,
    secure: true
});

// Set up the server
const server = http.createServer((req, res) => {
    proxy.web(req, res);
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});