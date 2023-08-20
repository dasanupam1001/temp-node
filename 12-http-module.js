// HTTP module

const http = require('http')

const server = http.createServer(( req, res ) => {
  res.write('Welcome to the homepage!\nHello')
  res.end()
})

server.listen(5000) // in the search engine type: 'localhost:5000'

const server1 = http.createServer((req, res) => {
  // console.log(req)
  if (req.url === '/') {
    res.end('Welcome to our homepage!')  // '/' always represents the homepage
  }
  else if (req.url === '/about') {
    res.end('This is the about page')
  }
  else {
      res.end(`<h1>Oops!</h1>
      <p>Can not seem to find the page you are looking for</p>
      <a href="/">Home Page</a>`)
  }  
})
server1.listen(5100)