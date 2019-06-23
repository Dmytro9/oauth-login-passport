const express = require('express');

const app = express();


// set up view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('app listening for requests on port 3000');
});