// TASK
//read the contents from json file edit the constrains and update the json




//requiring fs module abd json file
const fs = require("fs");

var bufferstr=fs.readFileSync("./obj.json")

//convert json format to string
var str=bufferstr.toString()

//parsing strings into object kind file
var par=JSON.parse(str)

//retext variables
par.name='Mathi'
par.age=19

//convert to string format
const newstr=JSON.stringify(par)


//write in json format
fs.writeFileSync('./obj.json',newstr)