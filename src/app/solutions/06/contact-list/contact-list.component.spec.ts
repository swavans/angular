import {TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {Contact} from '../contact';
import {ContactListComponent} from './contact-list.component';
import {ContactService} from '../contact.service';

const getEditButtons = fixture => Array.from(fixture.nativeElement.querySelectorAll('button.btn-outline-success')) as HTMLElement[];
const getDeleteButtons = fixture => Array.from(fixture.nativeElement.querySelectorAll('button.btn-outline-danger')) as HTMLElement[];

describe('sol.06 - app-contact-list', () => {

  let mockService: {
    getContacts: () => Contact[],
    remove: () => void
  };

  beforeEach(() => {

    // creating mock service
    mockService = {
      getContacts: () => [
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
        }],
      remove: () => {}
    };

    spyOn(mockService, 'remove');

    // testing module configuration
    TestBed.configureTestingModule({
      declarations: [TestComponent, ContactListComponent],
      providers: [
        {provide: ContactService, useValue: mockService}
      ]
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
    mockService.getContacts = () => [];
    const fixture = TestBed.createComponent(TestComponent);

    // no contacts
    fixture.detectChanges();
    expect(fixture).toHaveContacts([]);
  });

  it('should handle "delete" click', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // get delete buttons
    const buttons = getDeleteButtons(fixture);
    expect(buttons.length).toBe(3);

    // remove first contact
    buttons[0].click();
    expect(mockService.remove).toHaveBeenCalledWith(1);
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
  template: `<app-contact-list (edit)="edit($event)"></app-contact-list>`
})
class TestComponent {
  edit = () => {};
}
