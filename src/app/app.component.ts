import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any;
  images: any = []; 
  compareArray: any = [];
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  /** This function are used to get the data from the api **/
  readProducts(): void {
    this.photoService.getData()
      .subscribe(
        products => {
          this.products = products;
          if(this.products){
            this.images = this.products.slice(0, 10); // taking only 10 records
            this.images.forEach((element: any) => {
              element.compareDisplay = true;
            });
          }
        },
        error => {
          console.log(error);
        });
  }

  /** This function are used to add the data from the compare list **/
  addToCompare(obj: any){
    this.compareArray.push(obj);
    obj.compareDisplay = false;
  }

/** This function are used to remove the data from the compare list **/
  removeFromCompare(obj: any){
    let index = this.compareArray.findIndex((x: any) => x.id == obj.id);
    if(index >= 0){
      this.compareArray.splice(index,1);
    }
    obj.compareDisplay = true;
  }
}
