const mongoose = require('mongoose');
const url = 'mongodb+srv://UrFood:Cha302003@cluster0.kq7abvm.mongodb.net/UrFoodMern?retryWrites=true&w=majority'

// connet to mongodb with the function monodb
const mongoDB = async() =>{
    await mongoose.connect(url, {useNewUrlParser: true}, async(err, result) =>{
        if(err)
        {
            console.log("--",err);
        }
        else{
            console.log('connected to mongodb')
            // reading the data from the server
            const fetched_data = await mongoose.connection.db.collection('food_items');
            fetched_data.find({}).toArray(function (err, result){
              if(err) console.log("--", err);
                else console.log();
            })
        }
    });
}
    

module.exports = mongoDB;