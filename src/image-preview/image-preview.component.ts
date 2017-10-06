import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnChanges {

  @Input() hqImage;
  @Input() lowImage;
  @Input() bgPlaceholder;
  @Input() filterLowImage;
  @Input() paddingBottom;
  @Input() fallbackSrc;
  @Input() title = '';
  @Input() alt = '';

  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('qualityImage') qualityImage: ElementRef;

  private classLoaded = 'loaded';

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
    const imgSmall = this.getSmallImageElement();
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
      this.qualityImage.nativeElement.classList.add(this.classLoaded);
    };

    imgLarge.onerror = () => {
      if (this.fallbackSrc) {
        this.qualityImage.nativeElement['src'] = this.fallbackSrc;
        this.qualityImage.nativeElement.classList.add(this.classLoaded);
      }
    };
  }


  private getSmallImageElement(): HTMLImageElement {
    return this.placeholder.nativeElement.querySelector('.image-small');
  }

  private resetPreview() {
    this.getSmallImageElement().classList.remove(this.classLoaded);
    this.qualityImage.nativeElement.classList.remove(this.classLoaded);
  }

  ngOnChanges() {
    this.resetPreview();
    this.loadMetaData();
    this.loadSmallImage();
    this.loadHqImage();
  }
}
