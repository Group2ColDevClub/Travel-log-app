const mongoose = require('mongoose');

const TripsSearchSchema = mongoose.Schema({
    searchCounts : {
        type: Number,
        require:true,
        min:0
    },
    flights : [{
        flightID: Number,
        flighPrice : {
            type: Number,
             min : 1 
        },
        flightStartDate: {
            type : Date,
            required: true,
            validator : function(value) {
                return value < this.flightEndDate
            },
            message: 'start date must be less the end date'
        },        
        flightEndDate : {
          type: Date,
          required : true,

        },
        flightCompany: String
    }],
    accomndations : [{
        accomndationID: Number,
        accomndationPrice : {
            type: Number,
             min : 1 
        },
        accomndationStartDate: {
            type : Date,
            required: true,
            validator : function(value) {
                return value < this.flightEndDate
            },
            message: 'start date must be less the end date'
        },        
        accomndationEndDate : {
          type: Date,
          required : true,

        },
        accomndationCompany: String,
    }],
    numberOfTravelers : Number,
    destination: String,
})

module.exports = mongoose.model('tripsSearch' , TripsSearchSchema);