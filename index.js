var express = require('express');
var bodyParser = require('body-parser');
var { translate2Human } = require ('./controller');

var app = express();

/**
{
  "text": ".... --- .-.. .- -- . .-.. .."
}
 */

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.post('/translate/2text', function (req, res) {
  var input = req.body.text;

  var result = {
    code: 200,
    response: translate2Human(input)
  };

  var encodedResult = JSON.stringify(result);

  res.send(encodedResult);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});