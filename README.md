# Deputies App

The Deputies App is an open source app that consumes the public data of brazilian's
deputies. Using the open source [GraphQL API](https://github.com/matheusrocha89/graphql-camara-deputados)
we can consume the data and display on the app.

### Reason

This project started as a hackweek project, I already made the GraphQL API so I just want to consume
the data and make a easy access to this data for the people and the app seems to be a good solution.

### Stack

The app is made in React Native and uses the Apollo GraphQL Client to connect to the server and
consume the data.

## Dependencies

To run this project you need to have the open GraphQL API running locally in your machine,
so go the [project page](https://github.com/matheusrocha89/graphql-camara-deputados) and check the
documentation to see how to run the server locally.

## How to run

### Env files

The environment variables of the project are configured in some env files, we use `react-native-config`
to manage them.

On the root of the file there is a `.env.example` file with the variable that you need to set.

The project works with 3 different env files, each one for a specific enviroment:

  - `.env.dev` = Development environment
  - `.env.staging` = Staging environment
  - `.env.production` = Production environment

Important note is, if you are running the server locally you just need to set the `GRAPHQL_URI` variable like this:

```
GRAPHQL_URI=http://localhost:4000/graphql
```

This will work on iOS because it's a simulator, but with Android emulator because like the name says
it's an emulator, your URI should point to your machine IP not localhost, because localhost is the
Android Emulator and not your machine, so for android running the server locally you should do this:

```
GRAPHQL_URI=http://10.0.2.2:4000/graphql
```

Remember that every time that you change the environment variables values you should build the app again.

### Running

First clone the project, after that install the dependencies:

```
yarn
```

After the dependencies were installed you can run the app on iOS simulator, Android Emulator or iOS and Android device.

There are some scripts that react native configured by itself to make it easier to run:

```
yarn ios // run iOS device or Simulator
```

```
yarn android-dev // run on Android device or Simulator in development mode
```

You can find more commands on `scripts` session of the `package.json` file.

To know more how to run a React Native app in devices, emulators and simulators you can read more about on these links:
 - [Running on device](https://facebook.github.io/react-native/docs/running-on-device)
 - [Running on iOS Simulator](https://facebook.github.io/react-native/docs/running-on-simulator-ios).
