const tourGuideModel = require('../models/TourGuideModel')

const getAllTourGuide = async(req, res) => {
    try {
        const [ data ] = await tourGuideModel.getAllTourGuide()
        res.json({
            message: 'GET all Tour Guide success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getTourGuideById = async(req, res) => {
    const id = req.params.id

    try {
        const tour_guide = await tourGuideModel.getTourGuideById(id)

        if (tour_guide.length > 0) {
            res.json({
                message: `Data Tour Guide Dengan ID:${id} Berhasil Diambil!`,
                data: tour_guide,
            });
        } else {
            res.status(404).json({
                message: `Data Tour Guide Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addTourGuide = async(req, res) => {
    const { body } = req
    if(!body.name || !body.email || !body.phone || !body.description || !body.price_of_day || !body.operational_area || !body.created_at || !body.created_by || !body.approved_at || !body.approved_by) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        const dataAlreadyExists = await tourGuideModel.getTourGuideByName(body.name)
        if(dataAlreadyExists.length > 0){
            return res.status(400).json({
                message: `Tour Guide dengan Nama: ${body.name} sudah ada, silahkan masukkan nama User yang lain!`
            })
        }
        await tourGuideModel.addTourGuide(body)
        res.status(201).json({
            message : 'Tambah data Tour Guide berhasil!',
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const updateTourGuide = async(req, res) => {
    const { id } = req.params
    const { body } = req
    if(!body.name || !body.email || !body.phone || !body.description || !body.price_of_day || !body.operational_area || !body.created_at || !body.created_by || !body.approved_by || !body.approved_at) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        const dataAlreadyExists = await tourGuideModel.getTourGuideByName(body.name)
        if(dataAlreadyExists.length > 0){
            return res.status(400).json({
                message: `Tour Guide dengan Nama: ${body.name} sudah ada, silahkan masukkan nama user yang lain!`
            })
        }
        await tourGuideModel.updateTourGuide(body, id)
        res.status(201).json({
            message : `UPDATE tour guide dengan ID:${id} berhasil!`,
            data : {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const deleteTourGuide = async(req, res) => {
    const { id } = req.params
    try {
        const dataAlreadyExists = await tourGuideModel.getTourGuideById(id)
        if(dataAlreadyExists.length == 0){
            return res.status(400).json({
                message: `Deleted failed! Tour Guide dengan ID:${id} tidak ditemukan!`
            })
        } 
        await tourGuideModel.deleteTourGuide(id)
        res.json({
            message : `Deleted Tour Guide dengan ID:${id} sukses!`,
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllTourGuide,
    getTourGuideById,
    addTourGuide,
    updateTourGuide,
    deleteTourGuide
}