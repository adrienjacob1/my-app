import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapPreviewComponent } from './components/face-snap-preview/face-snap-preview.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FaceSnapListComponent,
    NewFaceSnapComponent,
    FaceSnapPreviewComponent,
    SingleFaceSnapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FaceSnapListComponent,
    NewFaceSnapComponent,
    FaceSnapPreviewComponent,
    SingleFaceSnapComponent,
  ]
})
export class FaceSnapsModule { }
