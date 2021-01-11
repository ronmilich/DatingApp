import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'DATING APP'
  users: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(users => {
      this.users = users
    }, error => { console.log(error) })
  }
}
