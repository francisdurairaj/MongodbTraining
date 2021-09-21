show dbs //show list of db

use mongotest //switch to db or create db

db // show current db context

db.createCollection("Employee") // create collection - ie., table

show collections //list of collection

db.testStudent.insert({"id": 1001, "name":"Francis"}) // create table and insert record dynmically

db.Employee.insert({'empno':101,'name':'mark',
                    'city':'chennai','salary':81000})//write data to employee collection
db.Employee.insert({'empno':102,'name':'susan',
                    'city':'chennai','salary':100000})//write data to employee collection
db.Employee.insert({'empno':103,'name':'leann',
                    'city':'chennai','salary':150000})//write data to employee collection
                    
db.getCollection("Employee").find({})//get all the document from employee collection

db.Employee.find()//get all the document from employee collection

//insert multiple records use []
db.Employee.insert([
     {'empno':104,'name':'raphael', 'city':'trichy','salary':170000},
     {'empno':105,'name':'veronica', 'city':'vellore','salary':181000}
])

db.Employee.find({'name':'leann'})//get the document for particular condition

db.testStudent.drop()//drop the collection

db.Employee.find().limit(2)//limit no. of records from the employee collection

db.Employee.find().skip(1)//skip no. of records

db.Employee.createIndex({'empno': 1})//create index on column empno is sorting ascending if -1 then descending order

db.Employee.getIndexes()// show indexes

db.Employee.dropIndex({'empno': 1})//1 is set to drop

db.Employee.find().sort({'salary': -1})//sort 1 for ascending & -1 for descending

//$sum,$avg,$min,$max,$first,$last
db.Employee.aggregate([{$group:
    { _id: '$city', salary:{$sum:'$salary'} }}]) //group base on city and aggregate sum on salary

db.Employee.aggregate([{$group:
    { _id: '$city', salary:{$min:'$salary'} }}]) //group base on city and aggregate min on salary

db.Employee.aggregate([{$group:
    { _id: '$city', salary:{$max:'$salary'} }}]) //group base on city and aggregate max on salary

db.Employee.aggregate([{$group:
    { _id: '$city', salary:{$max:'$salary'} }}]) //group base on city and aggregate avg on salary

db.Employee.aggregate([{$group:
    { _id: '$city', salary:{$first:'$salary'} }}]) //group base on city and aggregate first on salary

db.Employee.aggregate([{$group:
    { _id: '$city', salary:{$first:'$salary'} }}]) //group base on city and aggregate last on salary

db.Employee.aggregate([{$group:
    { _id: null, salary:{$sum:'$salary'} }}])//sum of all the salary irrespective of the group

db.Employee.findOne()//returns only one document

db.Employee.find({},{'empno':1})// projection: show only selected column

db.Employee.find({},{'empno':1,'name':1,'_id':0})// projection: show only selected column


/*
Types of datatypes
------------------
Integer
String
Double
Boolean
Date
array
null,
Object
*/
var eb = {'basic':9100,'hra':810, 'tax': 300}
db.testdata.insert({
    'empno': 12,
    'name': 'wilson',
    'salary': 89056.32,
    'status': false,
    'doj': Date(),
    'leaves':['sun', 'sat'],
    'breakup': eb
})
db.testdata.find()



