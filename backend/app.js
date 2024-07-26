const express = require('express');
const cors = require('cors')
const no = express();

//middleware

no.use(cors())




const port  = 3000;

no.get('/Nicedude', (req, res) => {
    res.send({"hello":"there"})
});

no.listen(port, () => {
    console.log('Example app listening on port: '+ port)
});