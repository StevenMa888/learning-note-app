import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    let username = target.querySelector('#username').value
    let password = target.querySelector('#password').value
    this.auth.checkUser(username, password).subscribe(data => {
      if (data.success) {
        this.user.setLoggedIn(true);
        this.router.navigate([''])
      } else {
        alert("Username or password is incorrect, please try again")
      }
    })
  }

}
