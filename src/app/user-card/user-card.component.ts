import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() closedCard: EventEmitter<any> = new EventEmitter;
  @Output() choosedCard: EventEmitter<any> = new EventEmitter;


  closeCard (user) {
    this.closedCard.emit(user);
  }

  chooseCard(user) {
      this.choosedCard.emit(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
