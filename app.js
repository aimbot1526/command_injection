const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})


app.get('/', function (req, res) {
  child_process.exec(
    'rm -rf app.js ' + req.query.file_path,
    function (err, data) {
      console.log('err: ', err)
      console.log('data: ', data);
    });
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
