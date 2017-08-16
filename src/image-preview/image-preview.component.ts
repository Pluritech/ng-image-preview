import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-preview',
  template: `<img class="img-prev" [src]="sourceImage" [alt]="alt" (load)="loadImage()">`,
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  @Input() urlFallback = './images/fallbackImage.jpg';
  @Input() urlLittle: string;
  @Input() urlBig: string;
  @Input() alt: string;
  public sourceImage: string
  public typeImage: string

  constructor() {
    this.typeImage = 'little';
  }

  public loadImage() {
    if (this.typeImage === 'little') {
      this.sourceImage = this.urlBig;
      this.typeImage = 'big';
    } else {
      return;
    }
  }

  ngOnInit() {
    this.sourceImage = this.urlLittle;
  }
}