const express = require('express');

const app = express();
// this will format everything as json data not form data
app.use(express.json());

//candies array acting as our database
const CANDIES = [
  { name: 'snickers', qty: 43, price: 1.50 },
  { name: 'skittles', qty: 26, price: 0.99 }
]
// send a request to /candies as a get request
app.get('/candies', (req, res) => {
  res.json(CANDIES);
})
//allow user to make new candies as post request
app.post('/candies', (req, res) => {
  if (req.body.name.toLowerCase() === "circus peanuts") {
    res.status(403).json({ msg: "HORRIBLE CHOICE.  CIRCUS PEANUTS FORBIDDEN!" })
  }
  CANDIES.push(req.body);
  res.status(201).json(CANDIES);
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
});


