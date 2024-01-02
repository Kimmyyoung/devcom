exports.seed = async function(knex){
  await knex('events').del()
  await knex('events').insert([
    {
      id: 1,
      eventName: 'Vancouver Developer Networking',
      eventDescription: 'A networking event for developers in Vancouver',
      eventLocation: 'Vancouver',
      eventDateTime: '2021-08-01 12:00:00',
      eventCapacity: 50,
      eventAttendeesCount: 1,
      eventAttendees: JSON.stringify([
        {
          id: 1,
          username: 'test',
          email: 'test@test.com',
        },
      ]),
    },
  ])
};
