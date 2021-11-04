import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from '../filter/filter.component';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(private router: Router,private _http: HttpService,private modalCtrl:ModalController) { }
  searchTerm:string;
  brews: Object;
  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: FilterComponent
    });

    await modal.present();
  }

  productPage(){
    this.router.navigate(['/product']);
  }
}
