import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ActionsComponent } from './actions/actions.component';
import { HomeComponent } from './home/home.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { HttpClientModule } from '@angular/common/http';
import { GetRequestComponent } from './get-request/get-request.component';
import { UsersRequestComponent } from './users-request/users-request.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    ActionsComponent,
    HomeComponent,
    PageNotFoundComponent,
    GetRequestComponent,
    UsersRequestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'services' , component: ServicesComponent } ,
      { path: 'actions' , component: ActionsComponent},
      { path: 'users' , component: UsersRequestComponent },
      { path: '**', component: PageNotFoundComponent},
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
