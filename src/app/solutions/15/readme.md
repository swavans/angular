## Ex.15 - Typeahead directive

Transform the typeahead component into the directive

### Tasks

* Implement a simple `TypeaheadDirective` that would log input values to console
* Make the directive filter values using the `search()` function. Log to console
* Use `ComponentFactory` and `ComponentFactoryProvider` to iInstantiate the `TypeaheadPopupComponent` dynamically if there are any filtered results in the `open()` method
* Implement the popup `close()` when there are no results
* After clicking on the item in popup, put it into the `input` and close the popup

### Links

* [Bootstrap Dropdown](http://v4-alpha.getbootstrap.com/components/dropdowns/)

### Content

* `Directive` vs `Component`
* Dynamic component creation
* `ComponentFactory` and `ComponentFactoryResolver`
