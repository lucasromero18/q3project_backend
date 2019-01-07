
exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", (table) => {
      table.increments();
      table.string("category")
      table.string("name");
      table.text("img");
      table.integer("price");
      table.text("description");
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products")
};
