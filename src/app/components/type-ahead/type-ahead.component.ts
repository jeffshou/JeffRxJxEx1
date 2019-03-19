import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';



@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styles: [`.form-control { width: 300px; }`]
})
export class TypeAheadComponent implements OnInit {
  public result: string;


  constructor() { }

  ngOnInit() {
  }


  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.result = term )
  )

}
