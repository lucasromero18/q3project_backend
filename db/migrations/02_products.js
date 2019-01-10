
exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", (table) => {
      table.increments();
      table.integer("category_id")
            .references("id")
            .inTable('categories')
            .onDelete('CASCADE')
      table.string("name");
      table.text("img");
      table.integer("price");
      table.text("description");
      table.integer("rating");
      table.text("stats");
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products")
};
