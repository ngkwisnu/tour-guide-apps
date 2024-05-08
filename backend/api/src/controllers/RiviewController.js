const riviewModel = require('../models/RiviewModel')

const getAllRiview = async(req, res) => {
    try {
        const [ data ] = await riviewModel.getAllRiview()
        res.json({
            message: 'GET all riview success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getRiviewById = async(req, res) => {
    const id = req.params.id

    try {
        const riview = await riviewModel.getRiviewById(id)

        if (riview.length > 0) {
            res.json({
                message: `Data riview Dengan ID:${id} Berhasil Diambil!`,
                data: riview,
            });
        } else {
            res.status(404).json({
                message: `Data riview Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addRiview = async(req, res) => {
    const { body } = req
    if(!body.rate || !body.description || !body.tour_guide_id || !body.user_id) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        await riviewModel.addRiview(body)
        res.status(201).json({
            message : 'Tambah data riview berhasil!',
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const updateRiview = async(req, res) => {
    const { id } = req.params
    const { body } = req
    if(!body.rate || !body.description || !body.tour_guide_id || !body.user_id) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        await riviewModel.updateRiview(body, id)
        res.status(201).json({
            message : `UPDATE riview dengan ID:${id} berhasil!`,
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

const deleteRiview = async(req, res) => {
    const { id } = req.params
    try {
        await riviewModel.deleteRiview(id)
        res.json({
            message : `Deleted riview dengan ID:${id} sukses!`,
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
    getAllRiview,
    getRiviewById,
    addRiview,
    updateRiview,
    deleteRiview
}