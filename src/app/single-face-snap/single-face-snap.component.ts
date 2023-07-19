import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "Mon premier facesnap",
      description: "description du premier facesnap",
      createDate: new Date(),
      snaps: 200,
      imageUrl: ""
    },
    {
      id: 2,
      title: "Mon second facesnap",
      description: "description du second facesnap",
      createDate: new Date(),
      snaps: 0,
      imageUrl: "",
      location: "New York"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }
}
