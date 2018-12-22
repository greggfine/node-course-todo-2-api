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

    // db.collection('Todos').insertOne({
    //     name: 'barry'
    // })

    // db.collection('Todos').insertOne({
    //     name: 'eSwanson',
    //     birthday: 'deb'
    // }, (err, result) => {
    //     if(err){
    //         console.log(err)
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2))
    //     }
    // })

    console.log(db)



    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users(name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Gregg Fine',
    //     age: 45,
    //     location: 'New Jersey'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
})