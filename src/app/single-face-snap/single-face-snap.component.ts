import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

faceSnap$!: Observable<FaceSnap>;

isSnapped!: boolean;
snappedButtonText!: string;

  constructor(private route: ActivatedRoute, private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.isSnapped = false;
    this.snappedButtonText = "Oh Snap!";

    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(){
    if (this.isSnapped){
      //this.faceSnapsService.snapFaceSnapById(this.faceSnap$.id, "unsnap")
      this.isSnapped = false;
      this.snappedButtonText = "Oh Snap!"
    }else{
      //this.faceSnapsService.snapFaceSnapById(this.faceSnap$.id, "snap")
      this.isSnapped = true;
      this.snappedButtonText = "Snapped!"
    }
  }
}
