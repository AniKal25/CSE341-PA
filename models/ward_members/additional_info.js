const mongoose = require('mongoose');

const additional_infoSchema = mongoose.Schema( {
    streetAddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zipCode:{
        type: Number,
        required: true
    },
    email_address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    
}, {
    collection: "additional_info",
})

module.exports = mongoose.model("Additional_info", additional_infoSchema)