const mongoose = require('mongoose')

const treeSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    parentId:{
        type:String
    }


})
const Tree =mongoose.model("Tree",treeSchema)

module.exports = Tree