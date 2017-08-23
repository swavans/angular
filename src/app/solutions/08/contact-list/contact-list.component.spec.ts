import {TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {Contact} from '../contact';
import {ContactListComponent} from './contact-list.component';
import {ContactService} from '../contact.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CONTACTS} from '../contacts';
import {By} from '@angular/platform-browser';

const getEditButtons = fixture => Array.from(fixture.nativeElement.querySelectorAll('button.btn-outline-success')) as HTMLElement[];
const getDeleteButtons = fixture => Array.from(fixture.nativeElement.querySelectorAll('button.btn-outline-danger')) as HTMLElement[];
const getPageLinks = fixture => Array.from(fixture.nativeElement.querySelectorAll('li')) as HTMLElement[];
const getPages = fixture => getPageLinks(fixture).map(li => li.innerText);

const triggerFilter = (fixture, value: string) => {
  const input = fixture.nativeElement.querySelector('input');
  input.value = value;
  const evt = document.createEvent('MouseEvent'); // name not important, just need event object
  evt.initEvent('input', true, true);
  input.dispatchEvent(evt);
};

describe('sol.08 - app-contact-list', () => {

  let mockService: {
    getContacts: (filter?: string) => Contact[],
    remove: () => void
  };

  beforeEach(() => {

    // creating mock service
    mockService = {
      getContacts: (filter?: string) => Array.from(CONTACTS),
      remove: () => {}
    };

    spyOn(mockService, 'remove');

    // testing module configuration
    TestBed.configureTestingModule({
      declarations: [TestComponent, ContactListComponent],
      imports: [NgbPaginationModule.forRoot()],
      providers: [
        {provide: ContactService, useValue: mockService}
      ]
    });
  });

  it('should render contact list', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // list with 5 contacts
    expect(fixture).toHaveContacts([
      'Winnie The Pooh',
      'Christopher Robin',
      'Eyeore The Donkey',
      'Kanga Roo',
      'Scrooge McDuck'
    ]);
  });

  it('should render empty contact list with no pages', () => {
    mockService.getContacts = () => [];
    const fixture = TestBed.createComponent(TestComponent);

    // no contacts
    fixture.detectChanges();
    expect(fixture).toHaveContacts([]);
    expect(getPages(fixture)).toEqual(['«', '»']);
  });

  it('should correctly display page numbers', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // list with 5 contacts
    expect(fixture).toHaveContacts([
      'Winnie The Pooh',
      'Christopher Robin',
      'Eyeore The Donkey',
      'Kanga Roo',
      'Scrooge McDuck'
    ]);

    expect(getPages(fixture)).toEqual(['«', '1 (current)', '2', '3', '4', '5', '»']);
  });

  it('should pass filter value to the contact service', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const {componentInstance} = fixture.debugElement.query(By.directive(ContactListComponent));

    triggerFilter(fixture, 'Duck');
    expect(componentInstance.term).toBe('Duck');
  });

  it('should handle "delete" click', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // get delete buttons
    const buttons = getDeleteButtons(fixture);
    expect(buttons.length).toBe(5);

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
    expect(buttons.length).toBe(5);

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
