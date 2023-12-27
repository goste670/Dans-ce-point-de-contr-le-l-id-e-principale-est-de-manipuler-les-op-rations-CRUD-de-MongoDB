const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// Affichez l’ensemble de la liste des contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render('index', { contacts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Autres opérations CRUD à implémenter ici

module.exports = router;
