import {Injectable} from '@angular/core';

@Injectable()
export class AgeService {

  getAge(birthYear: number): number {
    return new Date().getFullYear() - birthYear;
  }
}
