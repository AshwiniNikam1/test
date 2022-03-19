import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notificationSubject=new Subject();

  constructor() { }
  sendNotification(data:any)//call for the component
  {
    this.notificationSubject.next(data);//next():to pass the data my suject
  }
}
