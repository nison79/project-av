import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actions = ['management' , 'social content' , 'branding']

  constructor() { }

  ngOnInit(): void {
  }

}
