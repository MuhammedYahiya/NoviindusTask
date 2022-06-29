const Tree = require("../model/treeModel")

// exports.createTree = (async(req,res)=>{
//    const {name} = req.body

//    const tree = await Tree.create({
//     name
//    })
//    if(name){
//     res.status(200).json({
//         _id : tree._id,
//         name: tree.name
//     })
//    }
//    if(name._id=== _id){

//    }

// })

function createTree(mainTrees,parentId = null){
    let mainTree

    if(parentId == null){
        mainTree = mainTrees.filter((tree)=>tree.parentId == undefined)
    }else{
        mainTree = mainTrees.filter((tree) => tree.parentId == parentId)
    }
    for (let main of mainTree) {
        binaryTree.push({
          _id: main._id,
          name: main.name,
          parentId: main.parentId,
          children: createTree(categories, cate._id),
        })
      }
    
      return binaryTree
}

exports.addTree = (req,res)=>{
    const treeObj = {
        name:req.body.name
    }
    if(req.body.parentId){
        treeObj.parentId = req.body.parentId
    }

    const tree = new mainTree(treeObj)
    tree.save((error, mainTree) => {
        if (error) return res.status(400).json({ error })
        if (mainTree) {
          return res.status(201).json({ mainTree })
        }
      })
    }

    exports.getTree = (req, res) => {
        Tree.find({}).exec((error, mainTrees) => {
          if (error) return res.status(400).json({ error })
          if (mainTrees) {
            const binaryTree = createTree(mainTrees)
      
            res.status(200).json({ binaryTree })
          }
        })
      }