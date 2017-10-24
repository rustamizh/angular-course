import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() x;
  @Output() closedCard: EventEmitter<any> = new EventEmitter;
  @Output() choosedCard: EventEmitter<any> = new EventEmitter;

  closeCard (employee) {
    this.closedCard.emit(employee);
  }

  chooseCard(employee) {
      this.choosedCard.emit(employee);
  }

  constructor() { }

  ngOnInit() {
  }

}
