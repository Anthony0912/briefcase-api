const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan("dev"));

const mongo = require("mongodb").MongoClient;
const url = "mongodb+srv://dba_mongo:1UjJXuN6vKWKt6CX@cluster0.jk1e2.mongodb.net/briefcase?retryWrites=true&w=majority";

let db;

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    db = client.db("briefcase")
})

const environment = process.env.APP_ENVIRONMENT;
const allowList = environment === 'test' || environment === 'dev' ?
    [
        "http://localhost:3000",
        "http://192.168.1.113:3000",
    ]
    :
    [
        "https://anthonykcardona.herokuapp.com"
    ];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions = { origin: false };
    if (allowList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
}

app.use(cors(corsOptionsDelegate));

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/send-email', (req, res, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { to, from, subject, text } = req.body
    const msg = {
        to: to,
        from: from,
        subject: subject,
        text: text
    }
    sgMail
        .send(msg)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            next(error)
        })
});

app.get('/api/projects', (req, res, next) => {
    //Call Data Base
    db.collection('projects').find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result)
    });
});

module.exports = app;