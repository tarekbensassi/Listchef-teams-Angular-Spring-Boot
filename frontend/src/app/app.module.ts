import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListChefsComponent } from './components/list-chefs/list-chefs.component';
import { AddChefsComponent } from './components/add-chefs/add-chefs.component';
import { DetailsTeamComponent } from './components/details-team/details-team.component';

const routers: Routes = [
  {path: 'chefs', component: ListChefsComponent},
  {path: 'addchef', component: AddChefsComponent},
  {path: 'editchefs/:id', component: AddChefsComponent},
  {path: 'chefs/:id', component: DetailsTeamComponent},
  {path: '', redirectTo: '/chefs', pathMatch: 'full'}
];

@NgModule({  
  declarations: [
    AppComponent,
    ListChefsComponent,
    AddChefsComponent,
    DetailsTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }