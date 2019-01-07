const knex = require("../db/knex.js");


module.exports = {
    
    display: (req, res) => {
        res.render('home_page')
    }


}

