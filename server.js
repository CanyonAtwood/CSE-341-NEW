const express = require ('express');

const app = express();

const profRoute = require('./routes/professional');

const bodyParser = require ('body-parser');

const mongodb=require('./db/connect');

 

const port = process.env.PORT || 8080;



app.use(bodyParser.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    next();

  })

  .use('/', require('./routes'));



  mongodb.initDb((err,mongodb) =>{

      if(err) {

          console.log(err);

      }else{

          app.listen(port);

          console.log(`Connected to Mongo DB and listening on ${port}`);

      }

  })




 

// PORT is a placeholder enviornment variable that can be set outside application

// || 8080 defaults to port 8080 if no env is found

// app.listen(port, () => console.log(`Listening on port ${port}`))