## Ex.09b - Reactive forms

Use the Angular reactive forms inside `ContactEdit` component for data input and validation 

### Tasks

Try doing this exercise in TDD by focusing on `edit-contact.component.spec` and making all tests pass

* Create a form model using `FormGroup`, `FormControl` and bind them to the html form
* Add `Validators.required` to both inputs
* Disable 'Save' button is the form is invalid
* Conditionally set Bootstrap `has-danger` css error classes on form elements
* Conditionally display error messages below inputs
* Make sure that tests pass

### Links

* [Bootstrap Form Validation](https://v4-alpha.getbootstrap.com/components/forms/#validation)

### Content

* `ReactiveFormsModule`
* `FormGroup` and `FormControl`
* `FormGroup.setValue()` and `FormGroup.patchValue()`
* Data validation with `Validators.required` validator
* CSS class binding with `[class.has-danger]="..."` shortcut
