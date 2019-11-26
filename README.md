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

First clone the project, after that install the dependencies:

```
yarn
```

After the dependencies were installed you can run the app on iOS simulator, Android Emulator or iOS and Android device.

There are some scripts that react native configured by itself to make it easier to run:

```
yarn run-ios // run iOS device or Simulator
```

```
yarn run-android // run on Android device or Simulator
```

You can find more commands on `scripts` session of the `package.json` file.

To know more how to run a React Native app in devices, emulators and simulators you can read more about on these links:
 - [Running on device](https://facebook.github.io/react-native/docs/running-on-device)
 - [Running on iOS Simulator](https://facebook.github.io/react-native/docs/running-on-simulator-ios).
