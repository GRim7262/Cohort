const fs = require("fs");

function kiratReadsFile(cb) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

kiratReadsFile(onDone);