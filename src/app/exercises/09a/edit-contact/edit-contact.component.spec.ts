import {By} from '@angular/platform-browser';
import {TestBed, tick, fakeAsync} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {Contact} from '../contact';
import {EditContactComponent} from './edit-contact.component';
import {FormsModule} from '@angular/forms';

const getInputs = fixture => Array.from(fixture.debugElement.queryAll(By.css('input'))) as DebugElement[];
const getInputValues = fixture => getInputs(fixture).map(i => i.nativeElement.value);
const getGroupClasses = (fixture, index) =>
  (<HTMLElement>Array.from(fixture.nativeElement.querySelectorAll('div.form-group'))[index]).classList;
const getSaveButton = fixture => fixture.nativeElement.querySelector('button.btn-primary') as HTMLButtonElement;
const getClearButton = fixture => fixture.nativeElement.querySelector('button.btn-secondary') as HTMLButtonElement;

const fillContact = (fixture, contact) => {
  fixture.componentInstance.contact = contact;
  fixture.detectChanges();
  tick();
  fixture.detectChanges();
  expect(getInputValues(fixture)).toEqual([contact.firstName, contact.lastName]);
};

describe('ex.09a - app-edit-contact', () => {

  beforeEach(() => {
    // testing module configuration
    TestBed.configureTestingModule({
      declarations: [TestComponent, EditContactComponent],
      imports: [FormsModule]
    });
  });

  it('should render an empty form with disabled save button by default', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(getInputValues(fixture)).toEqual(['', '']);
    expect(getSaveButton(fixture).disabled).toBeTruthy();
  }));

  it('should render contact details in the form', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: '', lastName: ''});
    fillContact(fixture, {firstName: 'Winnie', lastName: ''});
    fillContact(fixture, {firstName: '', lastName: 'The Pooh'});
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
  }));

  it('should disable/enable save button based on empty/filled inputs', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: '', lastName: ''});
    expect(getSaveButton(fixture).disabled).toBeTruthy();

    // Winnie
    fillContact(fixture, {firstName: 'Winnie', lastName: ''});
    expect(getSaveButton(fixture).disabled).toBeTruthy();

    // Winnie The Pooh
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
    expect(getSaveButton(fixture).disabled).toBeFalsy();

    // The Pooh
    fillContact(fixture, {firstName: '', lastName: 'The Pooh'});
    expect(getSaveButton(fixture).disabled).toBeTruthy();
  }));

  it('should clean up the form on "save" click', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});

    getSaveButton(fixture).click();
    fixture.detectChanges();
    tick();
    expect(getInputValues(fixture)).toEqual(['', '']);
  }));

  it('should clean up the form on "clear" click', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});

    getClearButton(fixture).click();
    fixture.detectChanges();
    tick();
    expect(getInputValues(fixture)).toEqual(['', '']);
  }));

  it('should validate both inputs', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(getGroupClasses(fixture, 0)).toContain('has-danger');
    expect(getGroupClasses(fixture, 1)).toContain('has-danger');

    // Winnie
    fillContact(fixture, {firstName: 'Winnie', lastName: ''});
    expect(getGroupClasses(fixture, 0)).not.toContain('has-danger');
    expect(getGroupClasses(fixture, 1)).toContain('has-danger');

    // The Pig
    fillContact(fixture, {firstName: '', lastName: 'The Pooh'});
    expect(getGroupClasses(fixture, 0)).toContain('has-danger');
    expect(getGroupClasses(fixture, 1)).not.toContain('has-danger');

    // Piglet The Pig
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
    expect(getGroupClasses(fixture, 0)).not.toContain('has-danger');
    expect(getGroupClasses(fixture, 1)).not.toContain('has-danger');
  }));
});

@Component({
  selector: 'app-test-cmp',
  template: `<app-edit-contact [contact]="contact"></app-edit-contact>`
})
class TestComponent {
  contact: Contact;
}
