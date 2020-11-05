const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    // return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  // Recipe.create({
  //   title: 'primeiro',
  //   level: 'Easy Peasy',
  //   cuisine: 'portuguesa',
  //   ingridients: ['salt', 'sugar'],
  //   dishType: 'snack',
  //   duration: 10,
  //   creator: 'MySelf',
  // }).then((res) =>{
  //   console.log(`New recipie was just created ${res}`);
  //    mongoose.connection.close();
  // });

//Recipe.insertMany(data);

// Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
// .then((updatedRigatoni) => {
//   console.log(`The dish was updated ${updatedRigatoni`);
//    mongoose.connection.close();
// });
// Recipe.find({}, 'title').then((result) =>{
//   console.log(result);
// })


// Recipe.deleteOne({title: 'Carrot Cake'}).then((delCake) =>{
//   console.log('Cake deleted');
//    mongoose.connection.close();
// });


