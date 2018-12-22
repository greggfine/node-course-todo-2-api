const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
    }

    // console.log(db.collection('Todos').find().toArray().then((success) => {
    //             console.log(success)
    //         }, (err) => {console.log(err)}
    //         ))

    // console.log(db.collection('Todos').find().count().then((count) => {
    //     console.log(count)
    // }))

   db.collection('Users').find({name: 'Gregg Fine'}).count().then( count => {
        console.log(count)
    }, err =>  console.log(err))
            

    // db.collection("Todos").find().toArray().then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2))
    // })



    // db.close();
})