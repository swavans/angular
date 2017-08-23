import {TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {Contact} from '../contact';
import {ContactListComponent} from './contact-list.component';

const getEditButtons = fixture => Array.from(fixture.nativeElement.querySelectorAll('button.btn-outline-success')) as HTMLElement[];
const getDeleteButtons = fixture => Array.from(fixture.nativeElement.querySelectorAll('button.btn-outline-danger')) as HTMLElement[];

describe('ex.05 - app-contact-list', () => {

  beforeEach(() => {
    // testing module configuration
    TestBed.configureTestingModule({
      declarations: [TestComponent, ContactListComponent]
    });
  });

  it('should render contact list', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // list with 3 contacts
    expect(fixture).toHaveContacts([
      'Winnie The Pooh',
      'Christopher Robin',
      'Eyeore The Donkey'
    ]);
  });

  it('should render empty contact list', () => {
    const fixture = TestBed.createComponent(TestComponent);

    // no contacts
    fixture.componentInstance.contacts = [];
    fixture.detectChanges();
    expect(fixture).toHaveContacts([]);
  });

  it('should handle "delete" click', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'remove');

    // Note: Use helper 'getDeleteButtons(...)' function and button's 'click()' method

    // TODO: click on the second contact 'delete' button and ensure that 'remove' method is called
  });

  it('should handle "edit" click', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'edit');

    // get edit buttons
    const buttons = getEditButtons(fixture);
    expect(buttons.length).toBe(3);

    // click on edit
    buttons[1].click();
    expect(fixture.componentInstance.edit).toHaveBeenCalledWith({
      id: 2,
      firstName: 'Christopher',
      lastName: 'Robin'
    });
  });
});

@Component({
  selector: 'app-test-cmp',
  template: `<app-contact-list [contacts]="contacts" (edit)="edit($event)" (remove)="remove($event)"></app-contact-list>`
})
class TestComponent {

  contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Winnie',
      lastName: 'The Pooh'
    },
    {
      id: 2,
      firstName: 'Christopher',
      lastName: 'Robin'
    },
    {
      id: 3,
      firstName: 'Eyeore',
      lastName: 'The Donkey'
    }
  ];

  edit = () => {};
  remove = () => {};
}
