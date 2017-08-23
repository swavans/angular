## Ex.16 - Ngrx Architecture

Make the pagination work with the ngrx-platform

### Tasks

* Add the new `PageChangeAction` with `PAGE_CHANGE` type and make sure it is dispatched correctly using dev tools
* Add the page number to the store
* Implement the reducer that will handle the `PAGE_CHANGE` action type
* Implement the `getPage` selector and use it to set page number in pagination component. Make sure that when you initialize the state with page `3` pagination component opens it by default
* Implement the `getPaginatedContacts` selector and display only the paginated contact list

### Links

* [ngrx-platform](https://github.com/ngrx/platform) site

### Content

* `@ngrx/store` to the redux-like store architecture
* `@ngrx/store-dev-tools` for time debugging in browser
* `@ngrx/router-store` to save angular router state
* `@ngrx/effects` to handle async actions
