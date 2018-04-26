
exports.up = function(knex, Promise) {

    return knex.schema.createTable('game-questions', function(table) {
        table.increments(),     // primary key - auto increment
        table.string('Option1'),   // coloumn names
        table.string('Option2'),
        table.integer('counter1').defaultTo(0),
        table.integer('counter2').defaultTo(0)
    });
  
};

exports.down = function(knex, Promise) {
  
    return knex.schema.dropTable('game-questions');
};