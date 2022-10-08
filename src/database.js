const mongoose = require('mongoose')

const mongo_uri = 'mongodb://localhost:27017/test'

mongoose.connect(mongo_uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('Connected'))
.catch(err => console.error(err))