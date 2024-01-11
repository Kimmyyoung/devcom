exports.up = function (knex) {
  return knex.schema.alterTable('posts', function (table) {
    table.text('content').alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('posts', function (table) {
    table.string('content').alter();
  });
};
