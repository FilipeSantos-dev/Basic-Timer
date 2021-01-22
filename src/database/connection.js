const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/basictimer", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('>>> Mongodb conectado!');
})
.catch(err => {
    console.log(`>>> Erro na conexão: ${err}`);
});

module.exports = mongoose;