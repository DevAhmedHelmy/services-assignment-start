import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
}
