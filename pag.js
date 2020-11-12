const express = require('express')
const app = express()
const port = 80
var path = require('path');
const bodyParser = require('body-parser');

const { start } = require('repl');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'florin4u4me@yahoo.com',
    pass: 'ganauuwcnulqqkqr'
  }
});

app.get('/', (req, res) => {
  res.sendFile('Curca Nicola Florin.html', { root: __dirname });
})

app.get('/primuproiect', (req, res) => {
    res.sendFile('Project1.html',{ root: __dirname })
  })
  
  app.get('/aldoileaproiect', (req, res) => {
    res.sendFile('Project2.html',{ root: __dirname })
  })

  app.get('/altreileaproiect', (req, res) => {
    res.sendFile('Project3.html',{ root: __dirname })
  })
  app.get('/contact', (req, res) => {
    res.sendFile('contact.html',{ root: __dirname })
  })
  
app.listen(port, () => {
  console.log(`A pormit serveru pe portu:${port}`)
})

/*Nodemailer*/

app.post('/sendmail', (req, res) => {
  console.log("a mers postu");

    var name = req.body.nm;
    var prenume = req.body.pr;
    var mesaj = req.body.msg;
    var subject = req.body.sub;

  var mailOptions = {
    from: 'florin4u4me@yahoo.com',
    to: 'florin4u4me@yahoo.com',
    subject: subject + " de la " + name + prenume,
    text: mesaj
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('Mesaj trimis')
 
})

 





