const mongoose = require('mongoose');


const HomeSchema = new mongoose.Schema({
    propertyType: { type: String },
    houseNumber: { type: String },
    addressLine: {type: String},
    town: {type: String},
    numberOfBedrooms: {type: Number},
    numberOfBathrooms: {type: Number},
    furnishing: {type: String},
    monthlyRent: {type: Number},
    maxTenants: {type: Number},
    tenancylength : {type: Number},
    gardenAccess:{type: Boolean},
    parking:{type: Boolean},
    fireplace:{type: Boolean},
    billsincluded:{type:Boolean} ,
    studentsAllowed:{type: Boolean},
    petsAllowed:{type: Boolean},
    smokersAllowed:{type: Boolean}
   
    

}, { timestamps: true });

module.exports = mongoose.model('Home', HomeSchema);

