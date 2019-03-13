const path = require("path")
const express = require("express")
const app = express()
app.use(express.static(path.resolve(__dirname,"../")))
const cmsdata = require("./cmscon")

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200); /*让options请求快速返回*/
  } else {
    next();
  }
})

app.use("/api/info",(req,res)=>{
  res.json(cmsdata)
})



/*app.use("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../","index.html"))
})*/


app.listen(4000,()=>{
  console.log("server is ready on port 4000")
})
