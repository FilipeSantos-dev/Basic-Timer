module.exports = class ManegerDB {

    constructor() {
        this.mongoose = require('./connection');
        require('../database/Models/Times');
        this.Times = this.mongoose.model('timers');
    }

    loadTime(data) {

        const newTime = {
            time: data.data
        };

        console.log(newTime);

        new this.Times(newTime).save().then(() => {
            console.log('>>> Cadastrado com sucesso!');
        })
        .catch(err => {
            console.log(`>>> Erro no cadastro: ${err}`);
        });
    }
}