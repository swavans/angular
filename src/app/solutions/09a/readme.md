## Ex.09a - Template-driven forms

Use the Angular template-driven forms inside `ContactEdit` component for data input and validation 

### Tasks

Try doing this exercise in TDD by focusing on `edit-contact.component.spec` and making all tests pass

* Bind the form inputs with the `contact` field using `NgModel` directive
* Add `required` validator to both inputs
* Disable 'Save' button if the form is invalid
* Conditionally set Bootstrap `has-danger` css error classes on form elements
* Conditionally display error messages below inputs
* Make sure that tests pass!

### Links

* [Bootstrap Form Validation](https://v4-alpha.getbootstrap.com/components/forms/#validation)

### Content

* `FormsModule`
* Two-way data binding with `[(ngModel)]`
* `ngForm` and `ngModel` export with template variable
* Data validation with `required` validator
* CSS class binding with `[class.has-danger]="..."` shortcut
* Asynchronous testing with `async` and `fakeAsync`
