import { Component } from '@angular/core';

let employees = [
  {
    name: "John Doe",
    profession: "Engineer",
    ischoosen: false
  },
  {
    name: "Johanna Doe",
    profession: "Architect",
    ischoosen: false
  },
  {
    name: "Brian Doe",
    profession: "Manager",
    ischoosen: false
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private deletedIndex;

  private employees = employees;

  public deleteUser(employee) {
    this.deletedIndex = this.employees.indexOf(employee);
    this.employees.splice(this.deletedIndex, 1);
  }

  public chooseCard(currentCard) {
   currentCard.ischoosen = !currentCard.ischoosen;
  }
}