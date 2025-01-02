const jwt = require('jsonwebtoken');

const contents = {
    name: "harkirat",
    accountNumber: 123123123,
    iat: 1735819595
}

const value = jwt.sign(contents, 'sdnsdksd');
console.log(value);