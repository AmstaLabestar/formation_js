// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// const inscriptions = [];

// // 🔹 Route POST - Ajouter une inscription
// app.post('/inscription', (req, res) => {
//   const { nom, email } = req.body;

//   const existe = inscriptions.find(p => p.email === email);
//   if (existe) {
//     return res.status(400).json({ message: 'Email déjà inscrit !' });
//   }

//   inscriptions.push({ nom, email });
//   console.log(inscriptions);
//   res.json({ message: 'Inscription reçue !' });
// });

// // 🔹 Route GET - Retourner toutes les inscriptions
// app.get('/inscriptions', (req, res) => {
//   res.json(inscriptions);
// });

// app.listen(PORT, () => {
//   console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
// });
// sauvegarderEtAfficher(); // Afficher les tâches au démarrage


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Inscription = require('./models/Inscription');

const app = express();
const PORT = 3000;

// Connexion MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/evenement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connecté à MongoDB"))
.catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route POST : inscription
app.post('/inscription', async (req, res) => {
  const { nom, email } = req.body;

  try {
    const existe = await Inscription.findOne({ email });
    if (existe) {
      return res.status(400).json({ message: 'Email déjà inscrit !' });
    }

    const nouvelle = new Inscription({ nom, email });
    await nouvelle.save();

    res.json({ message: '✅ Inscription enregistrée avec succès !' });
  } catch (err) {
    console.error("❌ Erreur serveur :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route GET : récupérer toutes les inscriptions
app.get('/inscriptions', async (req, res) => {
  try {
    const data = await Inscription.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
