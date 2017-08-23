export interface RestoreService<T> {

  item: T;
  restore(): T;
}
