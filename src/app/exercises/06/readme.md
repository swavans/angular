## Ex.06 - Services and DI

Move all the data storage and handling to the dedicated `ContactService`. Inject and use this service from your components

### Tasks

* Move data and methods from the `AppComponent` - exercise 03 to the `ContactService`
* Finish implementing `contact.service.spec.ts` tests to ensure service works correctly
* Make sure the `ContactService` is available for injection
* `ContactList`: make sure the contact list is displayed and 'delete' buttons work
* `ContactEdit`: make sure the 'save' button works

### Content

* `@Injectable()` annotation
* `providers: [...]` definition
* TypeScript getters with `get contacts() {}`
* TypeScript initialization shortcut `constructor(private data: Data) {}`
