import { Component, OnInit } from '@angular/core'
import { User } from './models/user.model'
import { AccountService } from './_services/account.service'
import { PresenceService } from './_services/presence.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'DATING APP'
  users: any

  constructor(private accountService: AccountService, private presence: PresenceService) { }

  ngOnInit() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.accountService.setCurrentUser(user)
      this.presence.createHubConnection(user);
    }

  }

}
