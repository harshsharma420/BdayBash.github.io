import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  form = [
    { val: 'Knox'},
    { val: 'Bend'}
  ];
  constructor(private modalController: ModalController,private _http: HttpService) { }
  searchTerm:string;
  ngOnInit() {}
  dismissModal(){
    this.modalController.dismiss();
  }
}
