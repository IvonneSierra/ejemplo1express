const mongoose = require("mongoose"); // importando el componente mogoose
const animalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        requiered: flase,
    }
});
module.exports = mongoose.model("Animal", animalSchema);
