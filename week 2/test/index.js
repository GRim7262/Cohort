const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = [{
    name: 'john',
    kidneys: [{
        healthy: false
    }]
}]

app.get('/', function (req, res) {

    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', function (req, res) {

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: 'Post Done!',
        kidneys: users[0].kidneys
    })
})

app.put('/', function (req, res) {

    if (checkUnhealthyKidneys()) {

        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }

        res.json({
            msg: 'Put Done!',
            kidneys: users[0].kidneys
        })
    } else {
        res.status(411).send({
            msg: 'You have no bad kindeys to make healthy'
        })
    }
})

app.delete('/', function (req, res) {

    if (checkUnhealthyKidneys()) {
        const newKidneys = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: 'Delete Done!',
            kidneys: users[0].kidneys
        })
    } else {
        res.status(411).send({
            msg: 'You have no bad kindeys'
        })
    }
})

function checkUnhealthyKidneys() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(port, function () {
    console.log(`app is listening on ${port}`);
})