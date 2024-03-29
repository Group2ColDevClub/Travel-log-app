const mongoose = require('mongoose');

const TripsSearchSchema = mongoose.Schema({
    searchCounts : {
        type: Number,
        min: [0,'count must be a non-negative value']
    },
    flights : [{
        flightID: [{
            arrivalSegment:String,
            returnSegment: String
            }],
        flightPrice : {
            type: Number,
            min : [1, 'The minimum price is 1 dollar.'] 
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
        deepLink: String
    }],
    accomndations : [{
        accomndationID: Number,
        accomndationPrice : {
            type: Number,
            min : [1, 'The minimum price is 1 dollar.'] 
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