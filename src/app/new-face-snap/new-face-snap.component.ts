import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, map} from 'rxjs';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{

    snapForm!: FormGroup;  
    //urlRegex!: RegExp;
    faceSnapPreview$!: Observable<FaceSnap>


    constructor(private formBuilder: FormBuilder,
                private faceSnapsService: FaceSnapsService,
                private router: Router) { }

    ngOnInit(): void {
      this.snapForm = this.formBuilder.group( {
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required, /*Validators.pattern(this.urlRegex)*/]],
        location: [null]
      }, {
        updateOn: "blur"
      } );

      //this.urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
      
      this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(map(formValue => ({
        ...formValue,
        createDate: new Date(),
        snaps: 0,
        id:0
      }))
      );
    }

    onSubmitForm() {
      const newFaceSnap = this.faceSnapsService.getNewFaceSnap(this.snapForm.value);
      this.faceSnapsService.saveNewFaceSnap(newFaceSnap);
      this.router.navigateByUrl("/facesnaps")
    }
}
