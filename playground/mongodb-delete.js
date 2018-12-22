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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((doc) => {
    //     console.log(doc)
    // }, (err) => console.log(err))

    //also deleteOne and findOneAndDelete
    // These work in the same way as deleteMany however
    // findOneAndDelete deletes the first one found and returns the object back


    db.collection('Users').deleteMany({name: 'Gregg Fine'}).then((result) => {
        console.log(result)
    }, (err) => console.log(err))

    // db.close();
})