# Node.js Express API Parser of Privat bank exchange rates

> Node.js 
>
> Express 
> 
> API
> 
> TypeScript 3
> 
> MongoDB

## Description
This parser is getting currency every one hour using Node.js, Express, Mongodb API and TypeScript 3.

### Project Introduction
- support ES6/ES7 features
- using tslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Features
##### Authentication:
- jwt authentication
##### Storage:
- MongoDB

## Requirements

- node >= 10
- npm >= 6
- mongodb >= 3.0
- typescript >= 3.0

## Installation

First, generate swagger.json.

```bash
npm npm run create:swagger-doc
```

Then install libraries:

```bash
npm npm i
```
## App skeleton
```
.
├── swaggerDef.js
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── interfaces
│   │   │   │   └── interface.ts
│   │   │   ├── models
│   │   │   │   └── model.ts
│   │   │   ├── validations
│   │   │   │   ├── filter.ts
│   │   │   │   └── model.ts
│   │   │   ├── index.ts
│   │   │   ├── router.ts
│   │   │   └── service.ts
│   │   ├── Currency
│   │   │   ├── interfaces
│   │   │   │   └── interface.ts
│   │   │   ├── models
│   │   │   │   └── model.ts
│   │   │   ├── validations
│   │   │   │   ├── filter.ts
│   │   │   │   └── model.ts
│   │   │   ├── index.ts
│   │   │   ├── router.ts
│   │   │   └── service.ts
│   │   ├── router.ts
│   │   └── validation.ts
│   └── config
│       ├── connection
│       │   └── connection.ts
│       ├── env
│       │   └── router.ts
│       ├── error
│       │   ├── index.ts
│       │   └── sendHttpError.ts
│       ├── guards
│       │   └── jwtAuth.ts 
│       ├── middleware
│       │   └── middleware.ts   
│       └── server
│           ├── index.ts
│           ├── server.ts
│           └── serverHandlers.ts
├── test
│   ├── fixtures
│   │   └── user.json
│   ├── api.js
│   ├── authentication.js
│   └── index.js
├── tsconfig.json
└── tslint.json
```
## Running the API
### Development
To start the application in development mode, run:

Start the application in dev env:
```
nodemon
```
Start the application in production env:

Install ts pm2 and typescript compiler:
```
npm install -g pm2
pm2 install typescript
```

example start with scale on 2 core:
```
pm2 start ./src/router.ts -i 2 --no-daemon
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Testing
To run integration tests: 
```bash
npm test
```

