const knex = require("../db/knex.js");


module.exports = {

    getAllProducts: (req, res) => {
        knex('products').then((products) => {
            res.json(products)
        })
    },

    getProductsByCategory: (req, res) => {
        knex('products').where('category_id', req.params.id).then((products) => {
            res.json(products)
        })
    },

    getOneProduct: (req, res) => {
        knex('products').where('id', req.params.id).then((products) => {
            res.json(products)
        })
    },

    addOneProduct: (req, res) => {
        knex('products').insert({
            name: req.body.name,
            img: req.body.img
        }, '*').then((product) => {
            res.json(product)
        })
    },


    updateOneProduct: (req, res) => {
        knex('products').where('id', req.params.id).update({
            category_id: req.body.category_id,
            name: req.body.name,
            img: req.body.img,
            price: req.body.price,
            description: req.body.description
        }, '*').then(product => {
            res.json(product)
        })
    },

    deleteOneProduct: (req, res) => {
        knex('products').where('id', req.params.id).del().then((product) => {
            res.json(product)
        })
    },

    
    
}