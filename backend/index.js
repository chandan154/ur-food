const express = require('express')
const app = express()
const port = 3000
// wrintig reuire istead of import cause working on node.js
const mongoDB = require('./db.js');
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4001");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
// Create a middleware function to log requests.
app.get('/', (req, res) => {
    res.send('Hello World from chandan!')
});
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});