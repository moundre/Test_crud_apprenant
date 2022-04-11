import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../Model/Apprenant';

@Component({
  selector: 'app-ajout-apprenant',
  templateUrl: './ajout-apprenant.page.html',
  styleUrls: ['./ajout-apprenant.page.scss'],
})
export class AjoutApprenantPage implements OnInit {
  newapprenant = new Apprenant();
  id:any;
  prenom:any;
  nom:any;
  email:any;
  password:any;
  tel:any;

  constructor() { }

  ngOnInit() {
  }

}
