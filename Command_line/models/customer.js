const mongoose = require('mongoose');
import mongoose from 'mongoose';

//Customer Schema
const customerSchema = mongoose.Schema({
    firstname: { type: String},
    lastname: { type: String},
    phone: { type: String},
    email: { type: String}
});

//define and export
module.exports = mongoose.model('Customer', customerSchema);