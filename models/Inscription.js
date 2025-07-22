// models/Inscription.js
const mongoose = require('../db'); // importe la connexion

const InscriptionSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Inscription', InscriptionSchema);
