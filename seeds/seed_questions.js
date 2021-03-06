
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game-questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('game-questions').insert([
        { Option1: 'Eat and not gain any weight', Option2: 'Eat and not have to pay for it'},
        { Option1: 'Live next to a garbage dump', Option2: 'Live next to a cemetery'},
        { Option1: 'Explore the ocean', Option2: 'Explore space'},
        { Option1: 'Get paid for playing sports', Option2: 'Get paid for playing video games'},
        { Option1: 'Show your project on local host', Option2: 'Upload to Heroku'},
        { Option1: 'Earn $5M salary a year but you can not travel outside of your conutry', Option2: 'Keep your currnt pay'},
        { Option1: 'Settle every disagreement with a flip of a coin', Option2: 'Settle every disagreement with rock, paper, scissors'},
        { Option1: 'Work in an office', Option2: 'Work from home'},
        { Option1: 'Go back in time and meet your ancestors', Option2: 'Go forward in time and meet your great great grandchildren'},
        { Option1: 'Be a spy', Option2: 'Be a superhero'},
        { Option1: 'Sing every word you speak', Option2: 'Always speak in rhymes'},
        { Option1: 'Be the student who always sleeps in class', Option2: 'Be the student who always talks in class'},
        { Option1: 'Live in the North Island of New Zealand', Option2: 'Live in the South Island of New Zealand'},
        { Option1: 'Go to Hogwats', Option2: 'Go to EDA'},
        { Option1: 'Not have internet for a day', Option2: 'Not have food and water for a day'}

      ]);
    });
};
