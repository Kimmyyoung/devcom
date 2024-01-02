exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('role');
    table.timestamps(true, true);
  })
  .createTable('posts', function (table){
    table.increments('id');
    table.string('title');
    table.string('image');
    table.string('content');
    table.integer('user_id').unsigned();
    table.foreign('user_id')
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    table.timestamps(true, true);
  })
};


exports.down = function (knex) {
  return knex.schema.dropTable('posts')
  .dropTable('users')
}
