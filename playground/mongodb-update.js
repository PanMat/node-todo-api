//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err){        
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c70d3d9e6f5d42e17ec29df')
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c70d3d9e6f5d42e17ec29e0')
    }, {
        $set:{
            name: 'Jane Fonda'
        }, $inc:{
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

   // client.close();
});
