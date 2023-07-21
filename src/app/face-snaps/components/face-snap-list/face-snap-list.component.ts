import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { Observable, Subject, catchError, filter, interval, take, takeUntil, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$!:Observable<FaceSnap[]>;
  destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    /*Exemple fuite de memoire (pas bon du tout)*/
    // interval(1000).pipe(
    //   tap(value => console.log(value))
    // ).subscribe();

    /* Exemple pour gérer l'émission d'un observable*/
    interval(1000).pipe(
      filter(value => value % 3 === 0),
      take(5),
      tap(value => console.log(value))
        //mergeMap(value => someObservable$(value)),
        //concatMap(value => someObservable$(value)),
        //exhaustMap(value => someObservable$(value)),
        //switchMap(value => someObservable$(value))

      ).subscribe();

    /* Autre exemplle pour empecher une fuite de memoire */
    // interval(1000).pipe(
    //   tap(value => console.log(value)),
    //   takeUntil(this.destroy$),
    //   catchError(error => {
    //     console.log(error)
    //     throw error})
    // ).subscribe();

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  onReceivingFromChild(value: string) {
    console.log(value);
  }
}
