
const express = require('express')

const api = express();
api.use(express.static("/slider-led"))

api.listen(3000, () => {
    console.log('colour status');

});



api.post('/add', (req, res) => {
    console.log('slider status');



    res.send('rgb values');
})


api.get('/b', function (req, res) {

    res.send('Hello World!')
});