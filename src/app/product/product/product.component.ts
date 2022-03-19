import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, Subscriber, Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {
private mysubscription:Subscription
ngOnDestroy(): void {
  this.mysubscription.unsubscribe();
  }
  constructor() { }
  
  ngOnInit(): void {
    //create promise:native jS,eager
  const promise=new Promise(resolve=>  //resolve is callback
    {
      console.log('promise call')
      setTimeout(()=>
      {
        //promises returns only one time
        resolve('promise working');
        resolve('promise working1');
        resolve('promise working3');
        resolve('promise working2');
      },1000)
    })
    promise.then(result=>console.log(result))//o/p: promise call
    
     //Observable
  // const observable=new Observable(sub=>//callback func
  //   {
  //     console.log('Observable call')
  //     setTimeout(()=>
  //     {
  //       sub.next('observable working')
  //       sub.next('observable working1')
  //       sub.next('observable working2')
  //       sub.next('observable working3')

  //     },1000)
  //   })
  //   //observable returns multiple time
  //   //listening,lazy:if anybody not listen, it will not call
  //  observable.subscribe(result=>console.log(result))//no call
  // }
  // const observable=new Observable(sub=>//callback func
  //   {
  //     console.log('Observable call')
  //     setTimeout(()=>
  //     {
  //       sub.next('observable working')
  //       sub.next('observable working1')
  //       sub.next('observable working2')
  //       sub.next('observable working3')

  //     },1000)
  //   })
  // //filter:exact value is working, this operation is not used in promise opertaion
  //  observable.pipe
  //  (filter(d=>d==='observable working1')).
  //  subscribe(result=>console.log(result))//
  // }
 
  const observable=new Observable(sub=>//callback func
    {
      console.log('Observable call')
      let counter=0;
      setInterval(()=>
      {
        counter=counter+1;
        sub.next(counter)

      },1000)
    })
  
 this.mysubscription=  observable.
   
   subscribe(result=>console.log('counter is: '+result))//
  }



}
