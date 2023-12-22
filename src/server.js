require('dotenv').config()
const express = require("express")
const configApp =  require("./config")
const routesWeb =  require("./routes/web")

const app = express()
const port  =  process.env.PORT

configApp(app)

app.use(routesWeb)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})