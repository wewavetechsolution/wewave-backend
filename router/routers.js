const { getbannerDetails } = require('../controller/controllers')

const Router = require('express').Router()

Router.route('/banner_containt').get(getbannerDetails)

module.exports = Router