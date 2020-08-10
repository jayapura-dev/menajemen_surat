const mongoose = require('mongoose');

const suratSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, 'Kode Tidak Boleh Kosong'],
  },
  perihal: {
    type: String,
  },
  tanggal: {
    type: Date,
  },
  status: {
    type: String,
  },
});

const Surat = mongoose.model('Surat', suratSchema);

module.exports = Surat;
