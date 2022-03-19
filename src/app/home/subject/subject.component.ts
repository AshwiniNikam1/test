import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {ajax} from'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // observable: unicast
  const observable=new Observable(obj=>obj.next(Math.random()));
   // subscriber 1;
   observable.subscribe(d=>console.log(d));
    //subscriber 2
   observable.subscribe(d=>console.log(d));//both values are same

    //subject are multicast
    const subject=new Subject();
  //subscriber 1;
  subject.subscribe(d=>console.log(d));
  //subscriber 2
  subject.subscribe(d=>console.log(d));
  subject.next(Math.random())//both values are same

  //tow times user file is showing on network tab
  // const data=ajax('https://jsonplaceholder.typicode.com/users')
  // data.subscribe(d=>console.log(d));
  // data.subscribe(d=>console.log(d));

  const subject1=new Subject();
  const data1=ajax('https://jsonplaceholder.typicode.com/users')
  subject1.subscribe(d=>console.log(d));
 // subject1.next(200);
  subject1.subscribe(d=>console.log(d));
  const result=data1.subscribe(subject1)

  //behaviour subject
  const bSubject=new BehaviorSubject<number>(12);
  bSubject.subscribe(d=>console.log(`behaviour subject1 ${d}`))
  bSubject.next(201);
  bSubject.subscribe(d=>console.log('behaviour subject2',d))
  }

}
