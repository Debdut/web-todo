const express = require('express')

const { PORT } = require('../config')

function main () {
  const app = express()

  app.use(express.json())

  const server = app.listen(PORT, function listen () {
    const { address, port } = server.address()

    console.log(`[Web Todo] Server running at ${address}:${port}`)
  })
}

main()