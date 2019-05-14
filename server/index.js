const express = require('express');
const server = express();

server.get('/', (req, res, next) => {
    res.status(200).json('Codepipeline and server are up.');
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Listening on port ${PORT}...`));