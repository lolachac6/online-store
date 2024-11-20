// esto es para conectarnos a mongodb 
const moongose = require('mongoose')

moongose.connect(process.env.MONGO_URI);