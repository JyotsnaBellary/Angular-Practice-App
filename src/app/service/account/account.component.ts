import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string; } | undefined;
  @Input() id: number | undefined;

  constructor(
              private accountsService: AccountsService) {}

  ngOnInit(): void {
      console.log("inside account ")
  }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id!, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
