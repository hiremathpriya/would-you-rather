## Creating Database locally

* Assumption: postgres database is installed locally on the machine and is available to be accessed via `psql`

- run following command to create database (don't forget the `;`)

    `CREATE DATABASE useless-game;`

Above is a very important step, the migrations won't work without creating the database first.

* Run migrations

- `yarn knex migrate:latest`

This will run the migrations (i.e. create the tables you defined in the migrations folder, in _exports.up_)

- `Id` coloumn is `auto incremented` 

- Default value for `counter` is set at `0`, that means when we add new question default value of counter will be `0`.

## Creating database in Heroku

- Create a new app 

- Click on `Overview` > `Resources`
- In the `Add-ons` search box, search for `postgres`. The `Heroku Postgres` option will come up, click on it and then select the `Hobby Dev - Free` plan in the pop up screen and click `Provision`
- The above step will add the `heroku postgres` capability to your app. So under `overview` you would be able to see, `Heroku Postgres` under `installed add-ons`.

- click on `Heroku Postgres` under `Overview > installed add-ons`, this will open a new tab and show something like `Datastores >
postgresql-sinuous-60401`
    - Click `Settings` menu on the page to get to `Administration` menu.
        - Click on the `View Credentials` button on the right side to reveal details like below
```
Database Credentials
Get credentials for manual connections to this database.

Cancel
Please note that these credentials are not permanent.
Heroku rotates credentials periodically and updates applications where this database is attached.

Host
ec2-54-83-19-244.compute-1.amazonaws.com
Database
d9ubhvjfshtpu8
User
avigbjrayxnmed
Port
5432
Password
0c186652b4f1b9d895d374ed659553daab5b44358766b4c0e1d33a5739d3aa8c
URI
postgres://avigbjrayxnmed:0c186652b4f1b9d895d374ed659553daab5b44358766b4c0e1d33a5739d3aa8c@ec2-54-83-19-244.compute-1.amazonaws.com:5432/d9ubhvjfshtpu8
Heroku CLI
heroku pg:psql postgresql-sinuous-60401 --app our-would-you-rather
```

## Connecting to Heroku db using pgAdmin4

- Go to `pgAdmin4` and right click on the `Servers` > `create` > `Server`
    - Under `General` tab give some name to your database e.g `heroku-would-you`
    - Click on the `Connection` tab in the same pop-up and enter following details from the step above in `Create database in Heroku`
    ```
    Copy Host to Hostname
    Copy Database to Maintenance Database
    Copy User to Username
    Copy Password to Password

    ```

## Update the `Production` section of the knexfile.js

Copy the appropriate credentials details, in the `production` section of your knexfile.js.... wallah you should have connection to Heroku Postgres #fingerscrossed !!