import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  @Input() hqImage;
  @Input() lowImage;
  @Input() bgPlaceholder;
  @Input() filterLowImage;
  @Input() paddingBottom;
  @Input() title;
  @Input() alt;

  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('qualityImage') qualityImage: ElementRef;
  constructor() {}

  private loadMetaData(): void {
    if (!this.alt && this.title) {
      this.alt = this.title;
    }
    if (this.alt && !this.title) {
      this.title = this.alt;
    }
  }

  private loadSmallImage(): void {
    const imgSmall = this.placeholder.nativeElement.querySelector('.image-small');
    imgSmall.src = this.lowImage;
    imgSmall.onload = () => {
      imgSmall.classList.add('loaded');
    };
  }

  private loadHqImage(): void {
    const imgLarge = new Image();
    imgLarge.src = this.hqImage;
    imgLarge.classList.add('image-item');
    
    imgLarge.onload = () => {
      this.qualityImage.nativeElement.classList.add('loaded');
    };
  }

  ngOnInit() {
    this.loadMetaData();
    this.loadSmallImage();
    this.loadHqImage();
  }
}
