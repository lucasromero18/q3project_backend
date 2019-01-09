const categories = require("../controllers/category")
const product = require("../controllers/product")



module.exports = function(app){


//CATEGORIES
app.get('/categories', categories.getAllCategories);
app.get('/categories/:id', categories.getOneCategory);
app.post('/categories', categories.addOneCategory);
app.patch('/categories/:id', categories.updateOneCategory);
app.delete('/categories/:id', categories.deleteOneCategory);





//PRODUCT
app.get('/products', product.getAllProducts);
app.get('/products', product.getProductsByCategory);
app.get('/products/:id', product.getOneProduct);
app.post('/products', product.addOneProduct);
app.patch('/products/:id', product.updateOneProduct);
app.delete('/products/:id', product.deleteOneProduct);





}