import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  brews:Object;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }
  // data = [
  //   {
  //     imageUrl: './assets/1.jpg',
  //     title: 'Checker',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
  //   },
  //   {
  //     imageUrl: './assets/images/image-2.png',
  //     title: 'Heading Two',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
  //   },
  //   {
  //     imageUrl: './assets/images/image-3.png',
  //     title: 'Heading Three',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
  //   },
  //   {
  //     imageUrl: './assets/images/image-4.png',
  //     title: 'Heading Four',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
  //   },
  // ];

  slideOpts = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: '1.5',
  };
}
