import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  isLoading = false;
  users: User[] = [];

  constructor(private userService: UserService,
    // private is access modifier
    private globalLoaderService: GlobalLoaderService) { }

  ngOnInit(): void {
    this.fetchUsers();
    
  }

  ngOnDestroy(): void {

    // To clear data or unsubscribe from observables
    console.log('On Destroy called');
    
  }

  fetchUsers() {
    // Before the Fetch request is sent
    this.globalLoaderService.showLoader();

    // Start the Fetch request
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;

      // After the Fetch request is complete
      this.globalLoaderService.hideLoader();
    })
  }

  // fetchUsers() {
  //   this.isLoading = true;
  //   // Send Http request
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 2000);
  // }

}
