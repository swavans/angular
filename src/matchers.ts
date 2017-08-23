declare module jasmine {
  interface Matchers<T> {
    toHaveContacts(expected: any): boolean;
  }
}
