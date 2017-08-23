## Ex.10 - Routing

Split our small application in two 'edit' and 'list' pages and handle navigation between them using Routing

### Tasks

* Set up the `Routes` configuration in the `app-routing.module.ts`
* Make the `list` url display the `ContactList` component
* Make the `create` url display the empty `ContactEdit` component
* Handle navigation with 'Create New' button using `[routerLink]`
* Add the 'Back' button to return to the list using `(click)` and `router.navigate()`
* Make the `edit/2` url display the `ContactEdit` component with loaded contact 
(hint: check the `id` type if you have issues)
* Handle navigation on 'Save' and 'Cancel' click
* Check that manual URL change `edit/2` to `edit/3` works. Did you use snapshot or observable params?

### Link

* [Bootstrap Buttons markup](http://v4-alpha.getbootstrap.com/components/buttons/#button-tags)
* [Angular router.navigate(...) documentation](https://angular.io/docs/ts/latest/api/router/index/Router-class.html#!#navigate-anchor)
* [Angular RouterLink directive](https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html)

### Content

* `RouterModule` and `Routes` configuration
* `<router-outlet>`
* `ActivatedRoute` and `ActivatedRouteSnapshot`
* Imperative navigation with `Router.navigate()`
* Declarative navigation with `RouterLink` directive
