import { Component, OnInit } from '@angular/core';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss();
  }

}
