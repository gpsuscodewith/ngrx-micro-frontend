# NgRx Micro Frontend

## Overview
This is a sample for using NgRx to manage state for self-contained apps in a Micro-Frontend architecture. Each self-contained isolated app can have its own isolated and slice of NgRx state. The componentized stores interact with a global store for enabling cross-application communication.

In a Micro-Frontend architecture, an individual application should not be able to modify the state of other apps. However, they should be able to see the state of other apps. The state shared between apps should be aggregate root ids and should minimize the amount of data or state is leaked to other apps.  Within a module itself, there are many benefits of using a shared state store, but whenever possible, you should only emit events with aggregate ids to other apps.
