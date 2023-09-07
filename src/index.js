const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ParthClone');

     // `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/parth');`    //if your database has auth enabled

}
const port = 8100;

// Express Specific Stuff
app.use('/static', express.static('static'));

app.use(express.urlencoded());

// Endpoints
app.get('/', (req , res) => {
    const params ={}
    res.status(200).render('index.html', params);

});













// Mapping the EJS Template  engine to  .html files 
app.engine('html', require('ejs').renderFile);


app.set('views', path.join(__dirname, 'views')); // set the views directory








// Start the Server 
app.listen(port, ()=> {
    console.log(`This application has started successfully on port ${port}`);

});
