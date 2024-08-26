import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-type-of-washing',
  templateUrl: './type-of-washing.component.html',
  styleUrl: './type-of-washing.component.css',
})
export class TypeOfWashingComponent {
  @Input() washingId = '';
  @Output() washingIdChange = new EventEmitter<string>();

  onWashingIdChange() {
    this.washingIdChange.emit(this.washingId);
  }
}
