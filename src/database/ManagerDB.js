class ManegerDB {

    constructor() {
        this.mongoose = require('./connection'); 
    }

    createSchema() {
        const TimeSchema = new this.mongoose.Schema({
            time: {
                type: String,
                required: true
            },
            create_At: {
                type: Date,
                default: Date.now
            },
        });

        this.mongoose.model('Timers', TimeSchema);
    }

    loadTime() {

        this.createSchema();

        const newTime = this.mongoose.model('Timers');

        new newTime({
            time: "25487896"
        }).save().then(() => {
            console.log('>>> Cadastrado com sucesso!');
        })
        .catch(err => {
            console.log(`>>> Erro no cadastro: ${err}`);
        });
    }
}

const manager = new ManegerDB();
manager.loadTime();