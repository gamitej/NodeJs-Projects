## Food Order Web Application :-

### Installation

```
npm init
tsc --init
```

```
npm i express nodemon body-parser cors ts-node-dev typescript
```

```
npm i @types/express @types/cors
```

### MongoDB Container

```
docker run -d --name online-food -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo

```

- MongoDB Container URI

```
mongodb://username:password@localhost:27017
```

- -d → Run container in detached mode (background)
- --name mongodb → Name the container "mongodb"
- -p 27017:27017 → Expose MongoDB on port 27017
- -e MONGO_INITDB_ROOT_USERNAME=username → Set MongoDB username
- -e MONGO_INITDB_ROOT_PASSWORD=password → Set MongoDB password

```
docker ps
docker start mongodb
```
