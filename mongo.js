const mongoose = require('mongoose')

const dbname = 'poruke-api'



	
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  	
const porukaSchema = new mongoose.Schema({
    sadrzaj: String,
    datum: Date,
    vazno: Boolean
  })
   
const Poruka = mongoose.model('Poruka', porukaSchema)
  
	
const novaPoruka = new Poruka({
    sadrzaj: 'Mongoose je ...',
    datum: new Date(),
    vazno: true
  })

  /*Poruka.find({})
  .then(result => {
    result.forEach(poruka =>{
      console.log(poruka)
    })
    mongoose.connection.close()
  })*/
/*novaPoruka.save()
.then(result => {
  console.log('Poruka spremljena')
  console.log(result);
  mongoose.connection.close()
})*/