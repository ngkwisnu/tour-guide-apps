const express = require('express')
const RiviewController = require('../controllers/RiviewController')

const router = express.Router()

// Menampilkan semua data riview
router.get('/', RiviewController.getAllRiview)
// Menampilkan riview sesuai dengan id
router.get('/:id', RiviewController.getRiviewById)
// Menambahkan data riview
router.post('/', RiviewController.addRiview)
// Update data riview
router.put('/:id', RiviewController.updateRiview)
// Delete data riview
router.delete('/:id', RiviewController.deleteRiview)

module.exports = router