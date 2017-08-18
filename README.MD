# Angular Image preview
<p align="center">
  ![Demo ng-image-preview](./img-preview.gif)
</p>


This library was creating to abstract the [LQIP – Low Quality Image Placeholders](http://www.guypo.com/introducing-lqip-low-quality-image-placeholders/) technique used by Medium and Instagram. The code was implemented inspired by this awesome [codepen](https://codepen.io/jmperez/pen/yYjPER) made by [@JMPerez](https://github.com/JMPerez).

And we used [RandomUser API](https://randomuser.me) to make ower tests in development time.

If you want to know more about the technique, just visit the links above!

## Installation

To install this library, run:

```bash
$ npm install @pluritech/ng-image-preview --save
```

## Using the ng-image-preview

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NgImagePreviewModule } from '@pluritech/ng-image-preview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    NgImagePreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use image-preview component in your Angular application:

```xml
<div *ngFor="let picture of pictures">
  <image-preview
   [lowImage]="picture.thumbnail"
   [hqImage]="picture.large"
   paddingBottom="95%">
  </image-preview>
</div>
```

## Parameters
| Parameter        | Description           |
| ------------- |:-------------:|
| lowImage     | low image url |
| hqImage     |  high quality image url |
| paddingBottom | a padding-bottom value, to prevent the reflow, default is 66.6%       |
| bgPlaceholder | a background-color value to fill the placeholder 'container'      |





Mateus Durâes: https://github.com/mateusduraes
Lucas Corrẽa: https://github.com/lucascco

## License

MIT © [Lucas Correa & Mateus Durães](mailto:lucasccorrea@gmail.com)
