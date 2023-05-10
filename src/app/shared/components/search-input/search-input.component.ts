import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Input() parameter: string = 'No definido';
  @Output() searchCountry: EventEmitter<string> = new EventEmitter();
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  sendText(){
    const value = this.txtBuscar.nativeElement.value;
    if(value.length > 0){
      this.searchCountry.emit(value);
      this.txtBuscar.nativeElement.value = '';
    }
  }
}
