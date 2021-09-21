use mongotest

db.Employee.find()

db.testdata.find()

db.testdataone.insert({'empno':13,'name':'john','salary':32000, 'salary':null})//insert null type

db.testdataone.find()

//testing date 
var d=new Date()
var date2=ISODate()
var month=date2.getMonth()
 
db.testcollection.insert({"Date":d,"Date2":date2,
    "Month":month})
 
db.testcollection.find()

//conditional operator in mongodb
//Equivality - $eq -> {field:{$eq:value}}
//Less than - $lt -> {field:{$lt:value}}
//Greater than - $gt -> {field:{$gt:value}}
//Less than eqaul - $lte -> {field:{$lte:value}}
//Greater than equal - $gte -> {field:{$gte:value}}
//Not Equal - $ne -> {field:{$ne:value}}
//In - $in -> {field:{$in:[value1,value2,value3]}}

db.Employee.find({'name':{$eq:'mark'}}) //equal
db.Employee.find({'salary':{$lt:100000}}) //less than
db.Employee.find({'salary':{$gt:100000}}) //greater than
db.Employee.find({'salary':{$lte:100000}}) //less than equal
db.Employee.find({'salary':{$gte:100000}}) //greater than equal
db.Employee.find({'salary':{$ne:100000}}) //not equal
db.Employee.find({'salary':{$in:[100000,81000]}}) //in

