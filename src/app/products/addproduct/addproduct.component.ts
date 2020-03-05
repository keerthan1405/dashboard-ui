import { Component, OnInit } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  isImageData = [];
  cities: City[];
  selectedCity: City;
  imageSrc: any;
  constructor() { }

  ngOnInit(): void {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }
  getProImage(event) {
    const files = event.target.files;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = this.pushImagesToArray.bind(this);
      fileReader.onerror = (error) => {
        console.log('Error: ', error);
      };
    }
  }
  pushImagesToArray(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
    this.isImageData.push(reader.result);
  }
}
