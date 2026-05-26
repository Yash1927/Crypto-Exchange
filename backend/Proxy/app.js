const {createProxyMiddleware} = require("http-proxy-middleware");
const express = require("express");

const app = express()


const target_url = "https://api.backpack.exchange"

app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Expose-Headers', 'Content-Length, Content-Range');
    next();
})

app.use('/', createProxyMiddleware({
  target: target_url,
  changeOrigin: true
}))

const port = 3000;
app.listen(port, ()=> {
  console.log(`app is listening on ${port}`)
})