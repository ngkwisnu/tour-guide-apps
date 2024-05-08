const express = require('express')
const TourGuideController = require('../controllers/TourGuideController')

const router = express.Router()

// Menampilkan semua data tour guide
router.get('/', TourGuideController.getAllTourGuide)
// Menampilkan tour guide sesuai dengan id
router.get('/:id', TourGuideController.getTourGuideById)
// Menambahkan data tour guide
router.post('/', TourGuideController.addTourGuide)
// Update data tour guide
router.put('/:id', TourGuideController.updateTourGuide)
// Delete data tour guide
router.delete('/:id', TourGuideController.deleteTourGuide)

module.exports = router