const express = require('express');
const router = express.Router();

let marketData;


response = []
router.get('/', (req, res)=> {
    const data = fetch('http://localhost:3000/api/v1/tickers')
    .then(response => response.json())
    .then(data => {
        marketData = data;
        res.json(marketData)
    })
    
})

module.exports = router