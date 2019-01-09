const knex = require("../db/knex.js");


module.exports = {

    getAllCategories: (req, res) => {
        knex('categories').then((categories) => {
            res.json(categories)
        })
    },

    getOneCategory: (req, res) => {
        knex('categories').where('id', req.params.id).then((category) => {
            res.json(category)
        })
    },

    addOneCategory: (req, res) => {
        knex('categories').insert({
            name: req.body.name,
            img: req.body.img
        }, '*').then((category) => {
            res.json(category)
        })
    },


    updateOneCategory: (req, res) => {
        knex('categories').where('id', req.params.id).update({
            name: req.body.name,
            img: req.body.img
        }, '*').then((category) => {
            res.json(category)
        })
    },

    deleteOneCategory: (req, res) => {
        knex('categories').where('id', req.params.id).del().then((category) => {
            res.json(category)
        })
    },

    
    
}