const express = require("express");

const app = express();
const port=3000
app.get("/", (req, res) => {
  res.send("hello234");
});

app.listen(port,()=>{
  console.log(`listining at port${port}`)
});
