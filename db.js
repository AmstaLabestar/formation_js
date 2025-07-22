// db.js (connexion mongo séparée)
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/evenement')
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

module.exports = mongoose;
