
/*
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');

//require dotenv file
if(process.env.NODE_ENV !== 'production') require('dotenv').config();
//require config  stri secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//initialize app
var app = express();

//init body parser
app.use(express.json({extended: true}));
//this is for cleaning url from whitespaces, un needed charachterics
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
//for redirecting all HTTP trafic into HTTPS
app.use(enforce.HTTPS({trustProtoHeader: true}));



//FOR DEPLOYMENT
// Serve React static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
      //res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    );
  }
  
   
  //port indicating
  let port = process.env.PORT || 5000;
  app.listen(port, () => 
      console.log(`Server started on port ${port}`)
  );
  
  //for serviceWorker route
  app.use('./service-worker', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../build/service-worker.js'))
  })
  
  //Payment Route 
  app.post('/payment', (req, res) => {
      const body = {
          source: req.body.token.id,
          amount: req.body.amount,
          currency: 'usd'
      };

      //Make Stripe charges
      stripe.charges.create(body, (stripeError, stripeRes) => {
          if(stripeError){
              res.status(500).json({ error: stripeError})
          }
          res.status(200).json({succes: stripeRes})
      })
  })
  */
 const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});