//CRUD Create Read Update Delete
const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('Unable to connect DB!!!')

    // console.log('Successfully connected to DB!')

    const db = client.db(databaseName)

    /* :::::::Insert One value in DB ::::: */
    // db.collection('user').insertOne({
    //     name : 'Jessica',
    //     age : 26
    // },(err,result)=>{
    //     if(err) return console.log('Unable to Insert')
    //     return console.log(result.ops)
    // })
    /* ============================= */

    /* :::::: Insert multiple values in DB :::::::: */
    // db.collection('tasks').insertMany([
    //     {
    //         name: 'Clean the house',
    //         completed: false
    //     },
    //     {
    //         name: 'Pot plants',
    //         completed: false
    //     },
    //     {
    //         name: 'Renew inspection',
    //         completed: true
    //     }], (err, result) => {
    //         if (err) return console.log('Unable to insert')
    //         console.log(result.ops)
    //     }
    // )
    /* ================================================ */

    /* ::::::::: Find a value in DB ::::::::::: */
    // db.collection('user').findOne({ _id: ObjectID("5d300db798ca1e42d4beaeec") }, (err, res) => {
    //     if (err) return console.log('Unable to fetch')
    //     console.log(res)
    // })
    /* ======================================== */

    /* ::::::::: Find multiple value in Db :::::::::: */
    // db.collection('user').find({age : 26}).toArray((err , res)=>{
    //     if (err) return console.log('Unable to fetch')
    //     console.log(res)
    // })
    // db.collection('user').find({age : 26}).count((err , res)=>{
    //     if (err) return console.log('Unable to fetch')
    //     console.log(res)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((err, res) => {
    //     console.log(res)
    // })
    /* ============================================= */

    /* :::::::::::: Update a value in DB ::::::::::*/
    // db.collection('user').updateOne({_id: new ObjectID("5d300b0673085a21e4bcadb7")},
    // {
    //     // $set:{
    //     //     name : 'Mayuk'
    //     // }
    //     $inc:{
    //         age: 1
    //     }
    // }).then(res =>{
    //     console.log(res)
    // }).catch(err=>
    //     console.log(err)
    //     )
    /* =========================================== */

    /* :::::::::::: Update multiple value :::::::::::::: */
    // db.collection('user').updateMany(
    //     {
    //         completed : false
    //     },
    //     {
    //         $set:{
    //             completed : true
    //         }
    //     }
    // ).then(res => console.log(res)).catch(err=> console.log(err))
    /* ============================================== */

    /* ::::::::::::: Delete multiple value :::::::::::: */
    db.collection('user').deleteMany({
        completed : true
    }).then(res=> console.log(res)).catch(err=> console.log(err))
    /* ================================================ */

    /* ::::::::::::: Delete one value :::::::::::: */
    db.collection('tasks').deleteOne({
        name : 'Clean the house'
    }).then(res=> console.log(res)).catch(err=> console.log(err))
    /* ================================================ */
})