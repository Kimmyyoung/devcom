/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  await knex('users').del()
  await knex('posts').del()
  await knex('users').insert([
    {
      id: 1,
      username: 'admin',
      email: 'test@test.com',
      password: 'test',
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  await knex('posts').insert([
    {
      id: 1,
      title: 'First Post',
      image : "https://i.ibb.co/BrXvpNb/developer.jpg",
      content: 'This is the content of the first post',
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};


