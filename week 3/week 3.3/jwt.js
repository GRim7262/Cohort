const jwt = require('jsonwebtoken');

const value = {
    name: 'harkirat',
    accountNumber: 123123123
}

const token = jwt.verify(value, 'secret');
console.log(token);

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTczNTgxOTU5NX0.
ytnhdVoAlbsZBBf8fB3iAPXI2BQma-NjMWu6e4rN_D0 */