import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

@Input()  faceSnap!: FaceSnap;

snapped!: boolean;
snappedButtonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.snapped = false;
    this.snappedButtonText = "Oh Snap!";
  }

  onSnap(){
    if (this.snapped){
      this.snapped = false;
      this.snappedButtonText = "Oh Snap!"
    }else{
      this.snapped = true;
      this.snappedButtonText = "Snapped!"
    }
  }
}
