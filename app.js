const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3030;
const xlsx=require("xlsx");     //ta esta3mel package
const wb = xlsx.readFile("data.xlsx") ; 
let ws = wb.Sheets['services']; //read sheet of name students
let data = xlsx.utils.sheet_to_json(ws) ;
console.log(data) ;

app.get('/services',function (req, res){
  res.send(data)
})

app.listen(PORT)




 
app.use(cors())
 
