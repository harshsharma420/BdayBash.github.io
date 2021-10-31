import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  brews:Object;
  constructor(private router: Router,private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }
  addToCart(){
    //code for loggin in user goes here
    this.router.navigate(['/tabs/shop']);
  }
  slideOpts = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: '1.5',
  }
}
