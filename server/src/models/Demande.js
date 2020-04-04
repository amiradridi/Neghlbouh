const mongoose = require('mongoose')

const DemandeSchema = mongoose.Schema({
    cin: String,
    reason: String,
    date: {
        type: Date,
        default: Date.now
    },
    dateSortie: String,
    tempsSortie : String,
    tempsRetour: String,
    where : String,
    state: {
        type:Number,
        default: 0
    }
})

module.exports = mongoose.model("Demandes", DemandeSchema)