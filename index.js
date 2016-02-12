import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>Goodbye ${ process.env.NODE_ENV }</h1>`);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Start Server');
});
