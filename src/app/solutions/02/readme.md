## Ex.02 - Template Syntax

Create a simple contact edit form with 'save', 'clear' buttons and simple error handling

### Tasks

* Create a `Contact` property inside the `EditContact` component and bind it to the form
* Make the 'Clear' button work
* Add validation method that checks if contact is empty
* Display error message if the contact is empty
* Disable 'Save' button if the contact is empty 
* Handle the contact save
* Add ability to save contact by typing `Enter` key

### Links

* [Bootstrap - disable button](https://v4-alpha.getbootstrap.com/components/buttons/#disabled-state)
* [Bootstrap - Alert boxes](https://v4-alpha.getbootstrap.com/components/alerts/#examples)

### Content

* Event handling with `(click)`, `(input)` and `(keyup)`
* Attribute/property binding with `[value]` and `[disabled]`
* Template variables with `#ref`
* Conditional display with `ngIf` directive
* Debug display with `<pre>{{ data | json}}</pre>`
