import { Component, OnInit } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  menus = [
    {
      name:'Review'
    },
    {
      name:'About Us'
    },
    {
      name:'Contact Us'
    },
    {
      name:'Need Help?'
    }
  ];
  constructor(private modalCtrl: ModalController) { }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ReviewComponent
    });

    await modal.present();
  }

  ngOnInit() {
  }

}
