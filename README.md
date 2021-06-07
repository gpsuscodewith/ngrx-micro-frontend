# NgRx Micro Frontend

## Overview
This is a sample for using NgRx to manage state for self-contained apps in a Micro-Frontend architecture. Each self-contained isolated app can have its own isolated and slice of NgRx state. The componentized stores interact with a global store for enabling cross-application communication.

In a Micro-Frontend architecture, an individual application should not be able to modify the state of other apps. However, they should be able to see the state of other apps. The state shared between apps should be aggregate root ids and should minimize the amount of data or state is leaked to other apps.  Within a module itself, there are many benefits of using a shared state store, but whenever possible, you should only emit events with aggregate ids to other apps.

## Design Decision
Each microservice in the frontend will be delivered as an angular library, packaged as an NPM package. It will represent a bounded context that maintains data ownserhips and promote encapsulation. The library will register a state store and all supporting Redux structures such as actions, reducers, effects, etc. The feature state store will represent a slice of the applications state and be registered through the call to StoreModule.forFeature. Components within that feature/microservice will be able to see the current state of the service, submit actions for state change, and subscribe to the observable stream.

When feature components are hosted by a parent component, native Angular event emitters should be used to pass aggregate root ids, and the feature components themselves should be responsible to delivering the UI to the browser in the spirit of true microfrontends.

All communication between microservices is handled through the global NgRx state store and should be orchestrated by the frontend UI.
