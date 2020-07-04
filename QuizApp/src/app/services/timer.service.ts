import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private time: string;

  constructor() { }

  setTime(startDate: number) {
    const result = Date.now() - startDate;
    const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((result % (1000 * 60)) / 1000);
    this.time = `${hours}:${minutes}:${seconds}`;
  }

  getTime(): string {
    localStorage.setItem('time', this.time.toString());
    return this.time;
  }
}
