import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {
  totalAngularPackages: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>
    ('https://api.npms.io/v2/search?q=scope:angular').subscribe(
      data => {
        this.totalAngularPackages = data.total;
      }
    )
  }

}
