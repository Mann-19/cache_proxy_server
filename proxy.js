const proxy = require('http-proxy');
const http = require('http');
const { Command } = require('commander');

let cache = new Map();

const program = new Command();
