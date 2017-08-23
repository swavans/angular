import {CONTACTS} from './contacts';
import {ContactService} from './contact.service';
import {TestBed, inject} from '@angular/core/testing';

describe('sol.08 - Service: Contact', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should be initialized with contact list', inject([ContactService], (service: ContactService) => {
    expect(service.getContacts()).toEqual(CONTACTS);
  }));

  it('should return empty collection when there are no results', inject([ContactService], (service: ContactService) => {
    expect(service.getContacts('something that is not there')).toEqual([]);
  }));

  it('should filter collection based on the search term', inject([ContactService], (service: ContactService) => {
    expect(service.getContacts('Duck')).toEqual([
      {
        id: 5,
        firstName: 'Scrooge',
        lastName: 'McDuck'
      },
      {
        id: 21,
        firstName: 'Donald',
        lastName: 'Duck'
      },
      {
        id: 22,
        firstName: 'Daisy',
        lastName: 'Duck'
      }
    ]);
  }));

  it('should add new contacts and generate ids', inject([ContactService], (service: ContactService) => {
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
  }));

  it('should update existing contacts', inject([ContactService], (service: ContactService) => {
    service.save({
      id: 1,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });

    expect(service.getContacts().length).toBe(CONTACTS.length);
    expect(service.getContacts()[0]).toEqual({
      id: 1,
      firstName: 'Piglet',
      lastName: 'The Pig'
    });
  }));

  it('should remove contacts by id', inject([ContactService], (service: ContactService) => {
    service.remove(1);

    expect(service.getContacts().length).toBe(CONTACTS.length - 1);
    expect(service.getContacts()[0]).toEqual({
      id: 2,
      firstName: 'Christopher',
      lastName: 'Robin'
    });
  }));
});
