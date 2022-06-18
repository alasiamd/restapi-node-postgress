import { Component } from '@angular/core';
import { User } from './models/users';
import { UserServiceService } from './service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user:User[] = [];

  constructor(private userService: UserServiceService) {

   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.user = data;
    })
    console.log(this.user);
  }
}
