const userModel = require('../models/UserModel')

const getAllUser = async(req, res) => {
    try {
        const [ data ] = await userModel.getAllUser()
        res.json({
            message: 'GET all user success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getUserById = async(req, res) => {
    const id = req.params.id

    try {
        const user = await userModel.getUserById(id)

        if (user.length > 0) {
            res.json({
                message: `Data user Dengan ID:${id} Berhasil Diambil!`,
                data: user,
            });
        } else {
            res.status(404).json({
                message: `Data user Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        })
    }
}

const addUser = async(req, res) => {
    const { body } = req
    if(!body.name || !body.email || !body.role || !body.password || !body.created_at || !body.updated_at) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
        const dataAlreadyExists = await userModel.getUserByName(body.name)
        if(dataAlreadyExists.length > 0){
            return res.status(400).json({
                message: `User dengan Nama: ${body.name} sudah ada, silahkan masukkan nama User yang lain!`
            })
        }
        await userModel.addUser(body)
        res.status(201).json({
            message : 'Tambah data User berhasil!',
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const updateUser = async(req, res) => {
    const { id } = req.params
    const { body } = req
    if(!body.name || !body.email || !body.role || !body.password || !body.created_at || !body.updated_at) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.',
            data : null
        })
    }
    try {
        const dataAlreadyExists = await userModel.getUserByName(body.name)
        if(dataAlreadyExists.length > 0){
            return res.status(400).json({
                message: `User dengan Nama: ${body.name} sudah ada, silahkan masukkan nama user yang lain!`
            })
        }
        await userModel.updateUser(body, id)
        res.status(201).json({
            message : `UPDATE user dengan ID:${id} berhasil!`,
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

const deleteUser = async(req, res) => {
    const { id } = req.params
    try {
        const dataAlreadyExists = await userModel.getUserById(id)
        if(dataAlreadyExists.length == 0){
            return res.status(400).json({
                message: `Deleted failed! User dengan ID:${id} tidak ditemukan!`
            })
        } 
        await userModel.deleteUser(id)
        res.json({
            message : `Deleted User dengan ID:${id} sukses!`,
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
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}