const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

let marketData;

response = []
app.get('/', (req, res)=> {
    const data = fetch('http://localhost:3000/api/v1/tickers')
    .then(response => response.json())
    .then(data => {
        marketData = data;
        for (i=0; i<marketData.length; i++){
        console.log(marketData[i].symbol)
        console.log(marketData[i].lastPrice)
    }
    })
    
})

app.listen(3001)