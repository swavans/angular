import {TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {Contact} from '../contact';
import {EditContactComponent} from './edit-contact.component';
import {By} from '@angular/platform-browser';

const getInputs = fixture => Array.from(fixture.debugElement.queryAll(By.css('input'))) as DebugElement[];
const getInputValues = fixture => getInputs(fixture).map(i => i.nativeElement.value);
const getSaveButton = fixture => fixture.nativeElement.querySelector('button.btn-primary') as HTMLButtonElement;
const getClearButton = fixture => fixture.nativeElement.querySelector('button.btn-secondary') as HTMLButtonElement;

const fillContact = (fixture, contact) => {
  fixture.componentInstance.contact = contact;
  fixture.detectChanges();
  expect(getInputValues(fixture)).toEqual([contact.firstName, contact.lastName]);
};

describe('sol.05 - app-edit-contact', () => {

  beforeEach(() => {
    // testing module configuration
    TestBed.configureTestingModule({
      declarations: [TestComponent, EditContactComponent]
    });
  });

  it('should render an empty form with disabled save button by default', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(getInputValues(fixture)).toEqual(['', '']);
    expect(getSaveButton(fixture).disabled).toBeTruthy();
  });

  it('should render contact details in the form', () => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: '', lastName: ''});
    fillContact(fixture, {firstName: 'Winnie', lastName: ''});
    fillContact(fixture, {firstName: '', lastName: 'The Pooh'});
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
  });

  it('should disable/enable save button based on empty/filled inputs', () => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: '', lastName: ''});
    expect(getSaveButton(fixture).disabled).toBeTruthy();

    // TODO: Case 1: Only first name is filled -> save disabled
    // ex-start
    // Winnie
    fillContact(fixture, {firstName: 'Winnie', lastName: ''});
    expect(getSaveButton(fixture).disabled).toBeTruthy();
    // ex-end

    // TODO: Case 2: Both first and last names are filled -> save enabled
    // ex-start
    // Winnie The Pooh
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
    expect(getSaveButton(fixture).disabled).toBeFalsy();
    // ex-end

    // TODO: Case 3: Only last name is filled -> save disabled
    // ex-start
    // The Pooh
    fillContact(fixture, {firstName: '', lastName: 'The Pooh'});
    expect(getSaveButton(fixture).disabled).toBeTruthy();
    // ex-end
  });

  it('should clean up the form on "save" click', () => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});

    getSaveButton(fixture).click();
    fixture.detectChanges();
    expect(getInputValues(fixture)).toEqual(['', '']);
  });

  it('should clean up the form on "clear" click', () => {
    const fixture = TestBed.createComponent(TestComponent);

    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});

    getClearButton(fixture).click();
    fixture.detectChanges();
    expect(getInputValues(fixture)).toEqual(['', '']);
  });

  it('should handle "save" click', () => {
    const fixture = TestBed.createComponent(TestComponent);

    spyOn(fixture.componentInstance, 'save');

    // TODO: fill the form, click on save and check that 'save' method has been called with form contents
    // ex-start
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});

    getSaveButton(fixture).click();
    expect(fixture.componentInstance.save).toHaveBeenCalledWith({
      firstName: 'Winnie',
      lastName: 'The Pooh'
    });
    // ex-end
  });

  it('should trigger save on "Enter" press', () => {
    const fixture = TestBed.createComponent(TestComponent);

    spyOn(fixture.componentInstance, 'save');

    // first name
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
    getInputs(fixture)[0].triggerEventHandler('keyup.Enter', {});

    // last name
    fillContact(fixture, {firstName: 'Winnie', lastName: 'The Pooh'});
    getInputs(fixture)[1].triggerEventHandler('keyup.Enter', {});

    // checking
    expect(fixture.componentInstance.save).toHaveBeenCalledTimes(2);
    expect(fixture.componentInstance.save).toHaveBeenCalledWith({
      firstName: 'Winnie',
      lastName: 'The Pooh'
    });
  });

  it('should not trigger save on "Enter" press for invalid form', () => {
    const fixture = TestBed.createComponent(TestComponent);

    spyOn(fixture.componentInstance, 'save');

    // TODO: check that triggering 'Enter' press on an empty form won't trigger form save
    // ex-start
    fillContact(fixture, {firstName: '', lastName: ''});
    getInputs(fixture)[0].triggerEventHandler('keyup.Enter', {});
    getInputs(fixture)[1].triggerEventHandler('keyup.Enter', {});
    expect(fixture.componentInstance.save).not.toHaveBeenCalled();
    // ex-end
  });
});

@Component({
  selector: 'app-test-cmp',
  template: `<app-edit-contact [contact]="contact" (save)="save($event)"></app-edit-contact>`
})
class TestComponent {

  contact: Contact;

  save = () => {};
}
