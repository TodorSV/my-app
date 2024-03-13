import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      // Save the id from the route to a variable
      const id = value['id'];
      this.userService.getSingleUser(id).subscribe((user) => {
        console.log(user);
      });
    });
  }
}
