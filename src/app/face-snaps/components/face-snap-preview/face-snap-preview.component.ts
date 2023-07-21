import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.model';


@Component({
  selector: 'app-face-snap-preview',
  templateUrl: './face-snap-preview.component.html',
  styleUrls: ['./face-snap-preview.component.scss']
})
export class FaceSnapPreviewComponent implements OnInit {
  
  @Input()  faceSnap!: FaceSnap;
  @Output() passingToParent = new EventEmitter<string>();

  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)  // template string
  }

  

  onPassToParent() {
    this.passingToParent.emit("Je suis une donnée qui remonte l'application vers le haut")
  }
}
