import {CONTACTS} from './contacts';
import {ContactService} from './contact.service';

describe('sol.06 - Service: Contact', () => {

  it('should be initialized with contact list', () => {
    const service = new ContactService();
    expect(service.getContacts()).toEqual(CONTACTS);
  });

  it('should add new contacts and generate ids', () => {
    const service = new ContactService();

    service.save({
      firstName: 'Piglet',
      lastName: 'The Pig'
    });

    const newId = CONTACTS.length + 1;
    expect(service.getContacts().length).toBe(CONTACTS.length + 1);
    expect(service.getContacts()[newId - 1]).toEqual({
      id: newId,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });
  });

  it('should update existing contacts', () => {
    const service = new ContactService();

    service.save({
      id: 1,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });

    // TODO : finish implementing test
    // ex-start
    expect(service.getContacts().length).toBe(CONTACTS.length);
    expect(service.getContacts()[0]).toEqual({
      id: 1,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });
    // ex-end
  });

  it('should remove contacts by id', () => {
    // TODO : implement test
    // ex-start
    const service = new ContactService();

    service.remove(1);

    expect(service.getContacts().length).toBe(CONTACTS.length - 1);
    expect(service.getContacts()[0]).toEqual({
      id: 2,
      firstName: 'Christopher',
      lastName: 'Robin'
    });
    // ex-end
  });
});
