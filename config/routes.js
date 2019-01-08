const categories = require("../controllers/home_page.js")
const singleCategory = require("../controllers/category.js")
const product = require("../controllers/single_product.js")
const cart = require("../controllers/single_cart.js")



module.exports = function(app){


//ALL CATEGORIES
app.get('/', categories.display)



//SINGLE CATEGORY
app.get('/single_category/:id', singleCategory.display)




//PRODUCT
app.get('product/:id', product.display)




//CART




}