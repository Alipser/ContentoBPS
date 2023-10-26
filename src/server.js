const express = require('express');
const app = express();

app.use(express.static('/home/riwip3o-023/Documents/RIWI ROMARIO JULIO/PT/ContentoBPS'));

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
  res.sendFile('index.html', { root: '/home/riwip3o-023/Documents/RIWI ROMARIO JULIO/PT/ContentoBPS' });      //server responds by sending the index.html file to the client's browser

});
const newport = 5000;

app.listen(newport, () => {            //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${newport}`);
});