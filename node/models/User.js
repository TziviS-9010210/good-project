const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
name:{
type:mongoose.Schema.Types.String,
required:true,
},
username:{
    type:mongoose.Schema.Types.String,
    required:true, 
},
email:{
    type:mongoose.Schema.Types.String,
    required:true, 
},
address:{
    type:mongoose.Schema.Types.String,
    required:true, 
},
phone:{
    type:mongoose.Schema.Types.String,
    required:true, 
}
},{
timestamps:true
})

module.exports = mongoose.model('User', userSchema)