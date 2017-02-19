'use strict'
const req = require('sync-request');

const requests = (addr) => {
  const res = req('GET', addr)
  return res.getBody()
}

module.exports = requests
