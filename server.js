const express = require('express')
const app = express()
const port = 5000 || process.env.PORT;
const path = require('path');


// using production build of main react app
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))