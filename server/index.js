require('dotenv').config()                                      // dot env file

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const port = 5000; // You can use any desired port

const codeforcesRoute = require('./routes/cf.js')
const gfgRoute = require('./routes/gfg.js')
const leetcodeRoute = require('./routes/leetcode.js')

app.use(express.json())

// this writes all requests that happen at browser
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/cf',codeforcesRoute)
app.use('/api/gfg',gfgRoute)
app.use('/api/leetcode',leetcodeRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
