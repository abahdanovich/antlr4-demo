ANTLR4 demo
===========

Prepare dev env
---------------

```bash
# change volumes owner
docker-compose run -u root --entrypoint /bin/sh cli -c "chown -R node:node /home/node/.npm"

# install deps
docker-compose run --entrypoint /bin/sh cli -c "rm -rf node_modules && npm install"
```

Generate code
-------------

```bash
docker-compose run cli run generate
```

Transpile code
--------------

```bash
docker-compose run cli
```

Running tests
-------------

```bash
docker-compose run cli test
```

Run shell inside container
--------------------------

```bash
docker-compose run --entrypoint /bin/bash cli
```
