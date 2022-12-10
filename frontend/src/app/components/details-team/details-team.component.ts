import { PersonnelService } from 'src/app/services/personnel.service';
import { Personnel } from 'src/app/models/Personnel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-team',
  templateUrl: './details-team.component.html',
  styleUrls: ['./details-team.component.css']
})
export class DetailsTeamComponent implements OnInit {
  

  constructor(private _personnelService: PersonnelService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
    personnels?: any;
    personnel: Personnel = new Personnel();
    ngOnInit(): void {
        this.getTeams(this._activatedRoute.snapshot.params["id"]);
      
    }
    getTeams(id: number) {
    this._personnelService.getTeams(id).subscribe(
      data => this.personnels = data
    )
  }

  savePersonnel() {
    const id = this._activatedRoute.snapshot.params["id"];
    this._personnelService.savePersonnel(id,this.personnel).subscribe(
      data => {
        console.log('response', data);
        this.closePopup();
        this.getTeams(this._activatedRoute.snapshot.params["id"]);

      }
    )
  }
  deleteChef(id: number) {
    this._personnelService.deleteChef(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.getTeams(this._activatedRoute.snapshot.params["id"]);
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
