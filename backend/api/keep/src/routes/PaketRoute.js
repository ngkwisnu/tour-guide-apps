const express = require('express')
const PaketController = require('../controllers/PaketController')

const router = express.Router()

// Menampilkan semua data paket
router.get('/', PaketController.getAllPaket)
// Menampilkan paket sesuai dengan id
router.get('/:id', PaketController.getPaketById)
// Menambahkan data paket
router.post('/', PaketController.addPaket)
// Update data paket
router.put('/:id', PaketController.updatePaket)
// Delete data paket
router.delete('/:id', PaketController.deletePaket)

module.exports = router