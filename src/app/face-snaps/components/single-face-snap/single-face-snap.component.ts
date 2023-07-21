import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

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

  onSnap(id: number){
    if (this.isSnapped){
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(id, "unsnap").pipe(
        tap(() =>{
          this.isSnapped = false;
          this.snappedButtonText = "Oh Snap!"
        })
      )
     
    }else{
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(id, "snap").pipe(
        tap(() =>{
          this.isSnapped = true;
        this.snappedButtonText = "Snapped!"
        })
      )
      
    }
  }
}
