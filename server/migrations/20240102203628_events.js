
exports.up = function(knex) {
  return knex.schema.createTable('events', function (table) {
    table.increments('id');
    table.string('eventName').notNullable();
    table.string('eventDescription');
    table.integer('eventLocationId');
    table.string('eventLocation');
    table.string('eventLocationDetail');
    table.datetime('eventDateTime'); 
    table.integer('eventCapacity');  
    table.integer('eventAttendeesCount');  
    table.json('eventAttendees'); 
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};
