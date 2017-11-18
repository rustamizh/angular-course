import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mailbox-folder',
  templateUrl: './mailbox-folder.component.html',
  styleUrls: ['./mailbox-folder.component.css']
})
export class MailboxFolderComponent implements OnInit {

  constructor(private rout: ActivatedRoute) {
    this.rout.params.subscribe(params => console.log(params))
  }

  ngOnInit() {
  }

}
