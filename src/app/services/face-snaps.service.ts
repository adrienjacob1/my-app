import{ FaceSnap } from '../models/face-snap.model';
import{ Injectable} from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService{
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

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }
}