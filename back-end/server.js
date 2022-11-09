#!/usr/bin/env node

const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const course_review=require("./json_data/Course_Review.json")


// import the express app
const server = require("./app")

// which port to listen for HTTP(S) requests
const port = 4000

// call a function to start listening to the port

const listener = server.listen(port, function () {
    console.log(`Server running on port: ${port}`)
})

// a function to stop listening to the port
const close = () => {
    listener.close()
}

// export the close function
module.exports = {
    close: close,
}


