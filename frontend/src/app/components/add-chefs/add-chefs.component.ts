import { Personnel } from 'src/app/models/Personnel';
import { PersonnelService } from 'src/app/services/personnel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-chefs',
  templateUrl: './add-chefs.component.html',
  styleUrls: ['./add-chefs.component.css']
})
export class AddChefsComponent implements OnInit {

  constructor(private _personnelService: PersonnelService,
    private _router: Router) { }
    personnel: Personnel = new Personnel();


  ngOnInit(): void {
   
  }
 




  savePersonnel() {
    this._personnelService.savePersonnels(this.personnel).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/chefs");
      }
    )
  }
}
