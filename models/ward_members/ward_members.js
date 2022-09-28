const mongoose = require('mongoose');

const ward_memberSchema = mongoose.Schema( {
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    calling:{
        type: String,
        required: true
    },
    endowed:{
        type: String,
        required: true
    },
    returnMissionary:{
        type: String,
        required: true
    },
    relationshipStatus:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: true
    },

}, {
    collection: "ward_members",
})

module.exports = mongoose.model("Ward_members", ward_memberSchema)