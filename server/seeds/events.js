exports.seed = async function(knex){
  await knex('events').del()
  await knex('events').insert([
    {
      id: 1,
      eventName: 'Vancouver Developer Networking',
      eventDescription: 'A networking event for developers in Vancouver',
      eventLocationId: 1,
      eventLocation: 'Vancouver',
      eventLocationDetail: 'Vancouver City Hall, Vancouver, CA',
      eventDateTime: '2021-08-01 12:00:00',
      eventCapacity: 50,
      eventAttendeesCount: 1,
      eventAttendees: JSON.stringify([
        {
          user_id: 1,
          username: 'test',
          email: 'test@test.com',
        },
      ]),
    },
    {
      id: 2,
      eventName: 'Web Development Workshop',
      eventDescription: 'A hands-on workshop on web development technologies',
      eventLocationId: 2,
      eventLocation: 'Burnaby',
      eventLocationDetail: 'Burnaby Public Library, Burnaby, CA',
      eventDateTime: '2021-08-15 14:30:00',
      eventCapacity: 30,
      eventAttendeesCount: 15,
      eventAttendees: JSON.stringify([
        {
          user_id: 2,
          username: 'john_doe',
          email: 'john.doe@example.com',
        },
        {
          user_id: 3,
          username: 'jane_smith',
          email: 'jane.smith@example.com',
        },
      ]),
    },
    {
      id: 3,
      eventName: 'Mobile App Development Meetup',
      eventDescription: 'An informal meetup for mobile app developers',
      eventLocationId: 3,
      eventLocation: 'Coquitlam',
      eventLocationDetail: 'Coquitlam Community Center, Coquitlam, CA',
      eventDateTime: '2021-09-05 18:00:00',
      eventCapacity: 40,
      eventAttendeesCount: 25,
      eventAttendees: JSON.stringify([
        {
          user_id: 4,
          username: 'android_dev',
          email: 'android.dev@example.com',
        },
        {
          user_id: 5,
          username: 'ios_dev',
          email: 'ios.dev@example.com',
        },
      ]),
    },
    {
      id: 4,
      eventName: 'Machine Learning Seminar',
      eventDescription: 'An in-depth seminar on machine learning techniques and applications',
      eventLocationId: 1,
      eventLocation: 'Vancouver',
      eventLocationDetail: 'Vancouver Convention Center, Vancouver, CA',
      eventDateTime: '2021-09-10 18:00:00',
      eventCapacity: 50,
      eventAttendeesCount: 20,
      eventAttendees: JSON.stringify([
        {
          user_id: 6,
          username: 'ml_enthusiast',
          email: 'ml.enthusiast@example.com',
        },
        {
          user_id: 7,
          username: 'data_scientist',
          email: 'data.scientist@example.com',
        },
      ]),
    },
    {
      id: 5,
      eventName: 'UI/UX Design Meetup',
      eventDescription: 'A casual meetup for UI/UX designers to share ideas and experiences',
      eventLocationId: 3,
      eventLocation: 'Coquitlam',
      eventLocationDetail: 'Coquitlam Public Library, Coquitlam, CA',
      eventDateTime: '2021-09-20 16:30:00',
      eventCapacity: 25,
      eventAttendeesCount: 10,
      eventAttendees: JSON.stringify([
        {
          user_id: 8,
          username: 'ui_designer',
          email: 'ui.designer@example.com',
        },
        {
          user_id: 9,
          username: 'ux_designer',
          email: 'ux.designer@example.com',
        },
      ]),
    },
  ])
};
