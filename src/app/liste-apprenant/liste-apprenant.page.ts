import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../Service/crudservice.service';

@Component({
  selector: 'app-liste-apprenant',
  templateUrl: './liste-apprenant.page.html',
  styleUrls: ['./liste-apprenant.page.scss'],
})
export class ListeApprenantPage implements OnInit {
  listeApp:any;
  constructor( 
    private apprenantservice: CrudserviceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.listApprenant();
  }

  listApprenant(){
    return this.apprenantservice.Allapprenant().subscribe((data:any)=>{
      this.listeApp = data;
      
    })
  }
}
