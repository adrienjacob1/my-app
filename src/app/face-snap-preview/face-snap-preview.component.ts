import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap-preview',
  templateUrl: './face-snap-preview.component.html',
  styleUrls: ['./face-snap-preview.component.scss']
})
export class FaceSnapPreviewComponent implements OnInit {
  @Input()  faceSnap!: FaceSnap;

  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)  // template string
  }
}
