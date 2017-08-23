import {AppComponent} from './app.component';
import {CONTACTS} from './contacts';

describe('ex.05 - app', () => {

  it('should initialize application with contact list', () => {
    const app = new AppComponent();
    expect(app.contacts).toEqual(CONTACTS);
  });

  it('should add new contacts and generate ids', () => {
    const app = new AppComponent();

    app.save({
      firstName: 'Piglet',
      lastName: 'The Pig'
    });

    const newId = CONTACTS.length + 1;
    expect(app.contacts.length).toBe(CONTACTS.length + 1);
    expect(app.contacts[newId - 1]).toEqual({
      id: newId,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });
  });

  it('should update existing contacts', () => {
    const app = new AppComponent();

    app.save({
      id: 1,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });

    expect(app.contacts.length).toBe(CONTACTS.length);
    expect(app.contacts[0]).toEqual({
      id: 1,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });
  });
});
