const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const employeeSchema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  sexo: { type: String, required: false },
  codigo: { type: String, required: false },
  activo: {type: Boolean, required: false, default: true}
},
{
  versionKey: false,
  timestamps: true,
})

module.exports = mongoose.model("Employee", employeeSchema);