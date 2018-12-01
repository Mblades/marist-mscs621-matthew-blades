const express = require('express')
const app = express()
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var bodyParser = require('body-parser')

app.use(express.static(`${__dirname}/ui-react/build`));

app.use(bodyParser.json());
/** create a new instance of the language translator */
var translator = new LanguageTranslatorV3({
    iam_apikey: '1YaR2Zjy_m_u00nof6NZvc064PFBcDJaAXuhUBouzcwJ',
    version: '2018-05-01',
    headers: {
      'X-Watson-Technology-Preview': '2018-05-01',
      'X-Watson-Learning-Opt-Out': true,
    },
  });

// Translate api
app.post('/api/translate', function(req, res, next) {
    translator.translate(req.body, function(err, models) {
      if (err) return next(err);
      else res.json(models);
    });
  });

const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Server listening on port ' + port)
})