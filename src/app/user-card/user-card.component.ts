import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() employee;
  @Output() closedCard: EventEmitter<any> = new EventEmitter;
  @Output() choosedCard: EventEmitter<any> = new EventEmitter;


  closeCard (x) {
    this.closedCard.emit(x);
  }

  chooseCard(x) {
      this.choosedCard.emit(x);
  }

  constructor() { }

  ngOnInit() {
  }

}
