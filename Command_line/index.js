const mongoose = require('mongoose');
import mongoose from 'mongoose';
const customer = require('./models/customer');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;
//connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli');

//import model
const Customer = require('./models/customer');

//add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer =>{
        console.info('New Customer added');
        db.close();
    });
}


//find Customer
 const findCustomer = (name) => {
     //make case insensitive
     const search = new RegExp(name, 'i');
     Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            db.close();
        });
 }

 //export all methods
 module.exports = {
     addCustomer,
     findCustomer
 }