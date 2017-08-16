import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';

export * from './image-preview/image-preview.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagePreviewComponent
  ],
  exports: [
    ImagePreviewComponent
  ]
})
export class NgImagePreviewModule {
}
