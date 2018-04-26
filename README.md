# would-you-rather


Welcome to would-you-rather
A fun useless game

How does it work??

##The question? 
Would you rather [options 1] or [option 2]???? 

##Choose carefully
Make your selection by touching the option that you would rather do.

!Simple...have fun!


User stories

- A user wants to play the game

- A user wants to choose which option they would rather

- A user wants to know what most people would rather out of the two

- A user wants to exit the game and go back to the main menu

- A user wants to submit there own question for other users to choose from

## Creating Database

* Assumption: postgres database is installed locally on the machine and is available to be accessed via `psql`

- run following command to create database (don't forget the `;`)

    `CREATE DATABASE useless-game;`

Above is a very important step, the migrations won't work without creating the database first.

* Run migrations

- `yarn knex migrate:latest`

This will run the migrations (i.e. create the tables you defined in the migrations folder, in _exports.up_)


