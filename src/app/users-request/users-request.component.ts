import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-request',
  templateUrl: './users-request.component.html',
  styleUrls: ['./users-request.component.css']
})
export class UsersRequestComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>
    ('https://jsonplaceholder.typicode.com/users').subscribe(data => {this.users = data;
      }
      )
      console.log(this.users);
  }

}
