import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-preview',
  template: `<img class="img-prev" [src]="sourceImage" [alt]="alt" (load)="loadImage()" [ngClass]="{'img-blur': isBlur}">`,
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  public isBlur: boolean;

  @Input() urlFallback = './images/fallbackImage.jpg';
  @Input() urlLittle: string;
  @Input() urlBig: string;
  public sourceImage: string
  public typeImage: string

  constructor() {
    console.log('Hello ImageInstagramComponent Component');
    this.typeImage = 'little';
  }

  public loadImage() {
    if (this.typeImage === 'little') {
      this.isBlur = true;
      this.sourceImage = this.urlBig;
      this.typeImage = 'big';
    } else {
      this.isBlur = false;
      return;
    }

  }

  ngOnInit() {
    this.sourceImage = this.urlLittle;
  }
}