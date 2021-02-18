var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Inquryschema= new Schema({
    userid : {
        type:String ,
        required : true ,
    },
    // username : {
    //     type:String ,
    //     // required : true ,
    // },
    // telephonenumber : {
    //     type:String ,
    //     // required : true ,
    // },

    // email : {
    //     type:String ,
    //     required : true ,
    // },

    // accomadationrefid : {
    //     type:String ,
    //     required : true ,
    // },

    inquirytype :{
        type: String,
        //required: true,
    },

    reason : {
        type:String ,
        // required : true ,
    }



})

module.exports = mongoose.model('Inquryschema',Inquryschema);