import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ActionsComponent } from './actions/actions.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PageNotComponent } from './page-not/page-not.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    ActionsComponent,
    HomeComponent,
    UserComponent,
    PageNotComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'services' , component: ServicesComponent } ,
      { path: 'actions' , component: ActionsComponent},
      { path: 'user' ,component: UserComponent },
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
