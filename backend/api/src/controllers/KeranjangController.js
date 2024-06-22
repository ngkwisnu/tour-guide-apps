const KeranjangModel = require("../models/KeranjangModel");
const WisataModel = require("../models/WisataModel");
const UserModel = require("../models/UserModel");

const getAllKeranjang = async (req, res) => {
  try {
    const [data] = await KeranjangModel.getAllKeranjang();
    res.json({
      message: "GET all Keranjang success!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      serverMessage: error,
    });
  }
};

const getKeranjangByIdUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await KeranjangModel.getKeranjangByIdUser(id);
    if (data.length > 0) {
      const [keranjang] = await KeranjangModel.getKeranjangByIdUser(id);
      const [user] = await UserModel.getUserById(keranjang.id);
      const wisata = [];
      for (let index = 0; index < data.length; index++) {
        let [w] = await WisataModel.getWisataById(data[index].id_wisata);
        wisata.push(w);
      }
      res.json({
        message: `Data keranjang Dengan ID User:${id} Berhasil Diambil!`,
        user: user,
        data: wisata,
      });
    } else {
      res.status(404).json({
        message: `Data keranjang Dengan ID User:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      serverMessage: error.message || "Internal server error.",
    });
  }
};

const addKeranjang = async (req, res) => {
  let { body } = req;
  const requiredFields = ["id_user", "id_wisata"];

  const allFieldsPresent = requiredFields.every((field) =>
    Object.prototype.hasOwnProperty.call(body, field)
  );
  if (!allFieldsPresent) {
    return res.status(400).json({
      message: "Data yang dikirim tidak lengkap atau tidak sesuai format.",
    });
  }
  try {
    await KeranjangModel.addKeranjang(body);
    res.status(201).json({
      message: "Wisata telah ditambahkan ke keranjang!",
      data: { body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      serverMessage: error,
    });
  }
};

const deleteKeranjang = async (req, res) => {
  const { id } = req.params;
  try {
    const dataAlreadyExists = await KeranjangModel.getKeranjangById(id);
    if (dataAlreadyExists.length == 0) {
      return res.status(400).json({
        message: `Deleted failed! keranjang dengan ID:${id} tidak ditemukan!`,
      });
    }
    await KeranjangModel.deleteKeranjang(id);
    res.json({
      message: `Deleted keranjang dengan ID:${id} sukses!`,
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllKeranjang,
  getKeranjangByIdUser,
  addKeranjang,
  deleteKeranjang,
};
