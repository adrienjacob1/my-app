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
          imageUrl: "https://images.pexels.com/photos/129458/pexels-photo-129458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: 2,
          title: "Mon second facesnap",
          description: "description du second facesnap",
          createDate: new Date(),
          snaps: 0,
          imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          location: "New York"
        }
        
      ]

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId:number) {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
        if (faceSnap) {
          return faceSnap;
        }else {
          throw new Error('Facesnap pas rouvé');
        }
      }

      snapFaceSnapById(id: number, snapType: "snap" | "unsnap") {// Ici on sait le champ de valeur possible donc on reduit les possibilités dans le typage.
        const faceSnap = this.getFaceSnapById(id);
        snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
      }

      getNewFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string}) {
        const newFaceSnap: FaceSnap = {
          ...formValue,
          /*{ En fait les ... permettent d'ecrire lobjet automatiquement sinon faut faire a la main:
            title: formValue.title,
            description: etc..
          }*/
          snaps: 0,
          createDate: new Date(),
          id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        return newFaceSnap;
      }

      saveNewFaceSnap(newFaceSnap: FaceSnap) {
        this.faceSnaps.push(newFaceSnap);
      }
}