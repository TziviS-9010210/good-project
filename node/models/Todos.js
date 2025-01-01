const mongoose = require('mongoose')

const todosSchema = new mongoose.Schema({
title:{
type:mongoose.Schema.Types.String,
required:true,
},
tags:{
    type:mongoose.Schema.Types.String,
    required:false, 
},
completed:{
    type:mongoose.Schema.Types.Boolean,
    required:false, 
}
},{
timestamps:true
})

module.exports = mongoose.model('Todos', todosSchema)