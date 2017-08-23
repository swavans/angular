## Ex.12 - Routing: data injection

Add contact/contact list data fetch during the routing phase  

### Tasks

* For `/create` use - use the `data` configuration to inject an empty contact into `EditContact` component
* For `/list` use - implement `ContactListResolver` and `resolve` to fetch contact list
* For `/edit/:id` use - implement the `ContactResolver` to fetch a single contact from db

Don't forget do declare Resolvers in the DI mechanism!

### Content

* Sync data injection with `data` configuration
* Async data injection with `resolve` configuration and a `Resolver<T>`
