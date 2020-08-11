const Surat = require('./../models/suratModel');

exports.getAllSurat = async (req, res) => {
  try {
    const surat = await Surat.find();
    res.status(200).json({
      status: 'success',
      results: surat.length,
      data: {
        surat,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createSurat = async (req, res) => {
  try {
    const newSurat = await Surat.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        surat: newSurat,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      messages: err,
    });
  }
};
