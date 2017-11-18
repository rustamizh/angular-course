import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxFolderComponent } from './mailbox-folder.component';

describe('MailboxFolderComponent', () => {
  let component: MailboxFolderComponent;
  let fixture: ComponentFixture<MailboxFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
