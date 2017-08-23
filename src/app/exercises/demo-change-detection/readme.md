Steps:
* Bind contact, think why Angular has to evaluate all expressions all the time (mutable objects)
* Bind input to the contact. Will component be updated?
* Add `age` internal state to constructor
* Add `age` internal state to onInit
* Add `age` internal state to onChanges
* Add `age` internal state to onCheck
* Show how often doCheck is called
* Add `age` calculated as a getter
* Add `startInterval` in an arbitrary place in the application
* Show how to freeze an object
* Add button to switch contact object with birthYear +1
* Show changeDetection OnPush
* Add button to template with an empty handler, show that CD is triggered from within
* Inject `ChangeDetectorRef`, show what can be done
* Inject `NgZone`, show how to run outside
