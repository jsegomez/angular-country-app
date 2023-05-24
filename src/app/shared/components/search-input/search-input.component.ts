import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() parameter: string = 'No definido';
  @Output() searchCountry: EventEmitter<string> = new EventEmitter();
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.delayTime();
  }

  delayTime() {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(2000))
      .subscribe(result => this.searchCountry.emit(result));
  }

  sendText(value: string) {
    if (value.length > 0) this.debouncer.next(value);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}


