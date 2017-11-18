import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import {UserService} from './user.service';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailComponent } from './mail/mail.component';
import { UserListComponent } from './user-list/user-list.component';
import { MailboxFolderComponent } from './mailbox-folder/mailbox-folder.component';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'mail', component: MailComponent,
   children: [
    {path: 'mailbox', component: MailboxComponent,
    children: [
      {path: ':mailboxFolderName', component: MailboxFolderComponent}
    ]},
    {path: 'users', component: UserListComponent}
   ]}
]

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    LoginComponent,
    MailboxComponent,
    MailComponent,
    UserListComponent,
    MailboxFolderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
