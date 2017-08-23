import {RestoreService} from './restore.service';
import {Injectable} from '@angular/core';

@Injectable()
export class RestoreServiceImpl<T> implements RestoreService<T> {

  private originalItem: T;
  private currentItem: T;

  set item(item: T) {
    this.originalItem = item;
    this.currentItem = JSON.parse(JSON.stringify(item));
  }

  get item(): T {
    return this.currentItem;
  }

  restore(): T {
    this.currentItem = this.originalItem;
    return this.item;
  }
}
