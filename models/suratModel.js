const mongoose = require('mongoose');

const suratSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, 'Kode Tidak Boleh Kosong'],
  },
  perihal: {
    type: String,
    required: [true, 'Perihal Tidak Boleh Kosong'],
    trim: true,
  },
  tanggal: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
  },
  file: {
    type: String,
    required: [true, 'File Tidak Boleh Kosong'],
  },
});

const Surat = mongoose.model('Surat', suratSchema);

module.exports = Surat;
