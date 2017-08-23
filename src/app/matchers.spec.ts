function toHaveContacts(util) {
  return {
    compare(fixture, expected) {
      // extracting names from DOM
      const names = (<HTMLTableRowElement[]>Array.from(fixture.nativeElement.querySelectorAll('tr')))
        .map(tr => `${tr.cells[1].textContent} ${tr.cells[2].textContent}`)
        .slice(1);

      return {
        pass: util.equals(names, expected),
        message: `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(names)}`
      };
    }
  };
}

beforeAll(() => {
  jasmine.addMatchers({
    toHaveContacts: toHaveContacts
  });
});
