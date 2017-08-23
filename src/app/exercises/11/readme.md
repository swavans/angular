## Ex.11 - HTTP and Observables

Introduce observables for contact filtering and a real HTTP service to fetch contacts 

### Tasks

Use rxJS operators with `valueChanges `Observable:
* Add a 200ms debounce time before making HTTP request
* Send request only is there are >= 2 characters in the input
* Do not send the same request twice

HTTP:
* Finish implementing the delete functionality
* Finish implementing contact save (handle both new creation and update cases)

### Links

* [JSON-Server documentation](https://github.com/typicode/json-server#json-server---)
* [RxJS Filter Operator](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter)
* [RxJS DebounceTime Operator](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-debounceTime)

### Content

* `FormControl.valueChanges` observable stream
* `startWith`, `filter`, `debounceTime` and `distinctUntilChanged` RxJs operators
* `HttpClientModule`
* `http.get()`, `http.put()` and `http.delete()` observables
