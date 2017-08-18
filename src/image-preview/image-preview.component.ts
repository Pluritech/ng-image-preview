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

  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('qualityImage') qualityImage: ElementRef;
  constructor() {}

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
    this.loadSmallImage();
    this.loadHqImage();
  }
}
