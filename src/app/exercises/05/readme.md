## Ex.05 - Component testing

Learn how to test an isolated component using Angular `TestBed`

### Tasks

Finish implementing 3 tests

Analyze `contact-list.component.ts` contents and:
* Finish implementing the 'should handle delete click' test

Analyze `edit-contact.component.ts` contents and:
* Finish implementing the 'should disable/enable save button based on empty/filled inputs' test
* Finish implementing the 'should handle save click' test
* Finish implementing the 'should not trigger save on Enter press...' test


### Content

* `TestBed` configuration
* TestBed component fixture
* Access native DOM element with `fixture.nativeElement`
* Access test component instance with `fixture.componentInstance`
* Custom `toHaveContacts()` matcher for Jasmine
* Trigger change detection with `fixture.detectChanges()`
* Jasmine spying on methods with `spyOn()`
* DOM Events and clicks simulation with `triggerEventHandler()`
