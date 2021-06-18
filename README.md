### How to run dev build?
You should create a file with env variables

Filename: .env
```
DBNAME=postgres
DBUSER=postgres
DBPASSWORD=postgres_password
DBHOST=database
DBPORT=5432
```

To run dev build:
```
make up-dev
```

To stop dev build:
```
make down-dev
```

### TODO:
- change the default db user, password and db name
- make the correct volume for node_modules
- add tests to the api module
- try to remove NODE_PATH from api dockerfile






