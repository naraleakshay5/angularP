import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private auth: AuthService) {}
  @Output() updateDataEvent = new EventEmitter<string>();

  ngOnInit(): void {}
  onSubmit(): void {
    this.auth.login(this.username, this.password).subscribe();
    console.log(this.auth);
  }
}
