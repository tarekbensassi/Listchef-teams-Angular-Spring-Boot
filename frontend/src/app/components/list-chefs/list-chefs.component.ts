

import { Personnel } from 'src/app/models/Personnel';
import { PersonnelService } from 'src/app/services/personnel.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-chefs',
  templateUrl: './list-chefs.component.html',
  styleUrls: ['./list-chefs.component.css']
})
export class ListChefsComponent implements OnInit {

 
 

  constructor(private _personnelService: PersonnelService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
    personnels: Personnel[] = [];
    personnel: Personnel = new Personnel();



  ngOnInit(): void {
    this.listPersonnels();  
  }
 

  listPersonnels() {
    this._personnelService.getPersonnels().subscribe(
      data => this.personnels = data
    )
  }

  savePersonnels() {
    this._personnelService.savePersonnels(this.personnel).subscribe(
      data => {
        console.log('response', data);
        this.closePopup();
        this.listPersonnels();  
      
      }
    )
  }

  
  deleteChef(id: number) {
    this._personnelService.deleteChef(id).subscribe(
      data => {
        console.log('deleted response', data);
      
        this.listPersonnels(); 
      }
    )
  }


  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
 
 
 

  
}

