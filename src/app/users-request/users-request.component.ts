import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'users-request',
  templateUrl: './users-request.component.html',
  styleUrls: ['./users-request.component.css']
})
export class UsersRequestComponent implements OnInit {
  users: any;
  router: Router;

  constructor(private http: HttpClient ,_router: Router) {
    this.router = _router;
   }

  ngOnInit(): void {
    this.http.get<any>
    ('https://jsonplaceholder.typicode.com/users').subscribe(data => {this.users = data;
      }
      )
      console.log(this.users);
  }

  backToHome() {
    this.router.navigateByUrl('/') 
  }

}
