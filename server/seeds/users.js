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
      password: 'testtest1234',
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  await knex('posts').insert([
    {
      id: 1,
      title: 'Exploring the Wonders of Artificial Intelligence',
      image: 'https://i.ibb.co/BrXvpNb/developer.jpg',
      content: `
          Artificial Intelligence (AI) has become an integral part of our daily lives,
          revolutionizing the way we live, work, and interact. In this blog post,
          we will delve into the fascinating world of AI, exploring its applications,
          advancements, and the impact it has on various industries.

          **Understanding Artificial Intelligence:**
          AI refers to the simulation of human intelligence in machines that are
          programmed to think and learn like humans. It encompasses a wide range of
          technologies, including machine learning, natural language processing,
          and computer vision.

          **Applications of AI:**
          - *Healthcare:* AI is being used to analyze medical data, assist in diagnosis,
            and personalize treatment plans.
          - *Finance:* AI algorithms are employed for fraud detection, risk management,
            and investment strategies.
          - *Autonomous Vehicles:* AI powers the decision-making processes in self-driving
            cars, enhancing safety and efficiency.
          - *Customer Service:* Chatbots and virtual assistants use AI to provide
            quick and personalized customer support.

          **Advancements in AI:**
          - *Deep Learning:* Deep neural networks enable AI systems to learn from
            vast amounts of data, leading to improved performance in tasks like
            image recognition and natural language processing.
          - *Reinforcement Learning:* AI agents learn by interacting with an environment
            and receiving feedback in the form of rewards, leading to autonomous decision-making.
          - *Generative Adversarial Networks (GANs):* GANs can generate realistic
            images and content, contributing to advancements in creative fields.

          **Ethical Considerations:**
          As AI continues to evolve, ethical considerations become crucial.
          Issues such as bias in algorithms, privacy concerns, and the potential
          impact on employment require careful attention.

          In conclusion, the field of artificial intelligence holds immense potential
          for positive transformation, but it also comes with responsibilities.
          Continuous research, ethical guidelines, and public discourse are essential
          to ensure that AI benefits humanity in a fair and inclusive manner.
        `,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
};


