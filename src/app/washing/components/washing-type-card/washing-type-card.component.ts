import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Props {
  id?: string | null;
  value?: string | null;
  title?: string | null;
  price?: number | null;
  duration?: number | null;
}

@Component({
  selector: 'app-washing-type-card',
  templateUrl: './washing-type-card.component.html',
  styleUrl: './washing-type-card.component.css',
})
export class WashingTypeCardComponent {
  @Input() props: Props = {
    id: null,
    value: null,
    title: null,
    price: null,
    duration: null,
  };

  @Input() washingId = '';

  @Output() washingIdChange = new EventEmitter<string>();

  onWashingIdChange() {
    this.washingIdChange.emit(this.washingId);
  }
}
