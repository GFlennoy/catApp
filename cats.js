const mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var max = new Cat({
// 	name: "Turbo",
// 	age: 19,
// 	temperament: "Angelic"
// });

// max.save(function(err, cat){
// 	if(err){
// 		console.log("Something went wrong");
// 	} else {
// 		console.log("Cat saved to db")
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Goku",
	age: 1,
	temperament: "Anxious"
}, function(err, cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat);
	}
})


// Retrieve all cats from db and console.log each
Cat.find({}, function(err, cats){
	if(err){
		console.log("You have suffered a horrrible fate");
		console.log(err);
	} else{
		console.log("All the cats....")
		console.log(cats)
	}
})

// connect to database
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
