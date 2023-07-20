import{ FaceSnap } from '../models/face-snap.model';
import{ Injectable} from '@angular/core';
import{ Observable, map, switchMap} from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn: "root"
})

export class FaceSnapsService{

    constructor(private http: HttpClient) {}


   

      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>(`http://localhost:3000/facesnaps`);  // ici on met le port sur lequel tourne le backend (dossier angular-intermediaire)
      }

      getFaceSnapById(faceSnapId:number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
       
      }

      snapFaceSnapById(id: number, snapType: "snap" | "unsnap"): Observable<FaceSnap> {// Ici on sait le champ de valeur possible donc on reduit les possibilités dans le typage.
        
        return this.getFaceSnapById(id).pipe(
          map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + ( snapType === "snap" ? 1 :-1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${id}`, updatedFaceSnap))
        );

       
      }

      addNewFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string}) {
        
         return this.getAllFaceSnaps().pipe(
          map(faceSnaps => faceSnaps.sort( (a,b) => a.id - b.id )),
          map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
          map(previousFaceSnap => ({
            ...formValue,
            snaps: 0,
            createDate: new Date(),
            id: previousFaceSnap.id + 1

          })),
          switchMap(newFaceSnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFaceSnap))
         );
      }

     
}