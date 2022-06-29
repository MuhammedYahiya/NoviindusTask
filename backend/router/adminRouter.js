const express = require('express')
const {  addTree, getTree } = require('../controller/adminController')

const router = express.Router()

router.route('/create').post(addTree)
router.route('/show').get(getTree)

module.exports = router