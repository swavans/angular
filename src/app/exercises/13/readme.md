## Ex.13 - Routing: using guards

Prevent non logged-in user to access the edit/delete feature
You should prevent navigation to the edit component when
clicking `Try to edit the #5 item` button.

### Warning

* `Verify` that you have `id=5` as a contact in the database so that the item with id=5 can be edited!

### Tasks

* In `contact-list` use `AuthService` to show/hide action buttons regarding the user login state
* Implements the `AuthGuard.service.ts` with the proper `CanActivate` guard
* Protect the `edit/:id` route with the new guard, only allowing logged in user

Don't forget do declare AuthGuard in the DI mechanism!
