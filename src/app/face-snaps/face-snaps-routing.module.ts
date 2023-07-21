import { NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component"; 
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { AuthGuard } from "../core/guards/auth.guards";


const routes: Routes = [ 
    {
        path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]  // sous route (on la met en premier sinon pourrait croire que 'create' est un parametre de ':id' car sous route.)
    },
    {
        path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]
    }, 
    {
        path: '', component: FaceSnapListComponent, canActivate: [AuthGuard]  // sous route
    }


];
    

@NgModule ( {
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
} )

export class FaceSnapsRoutingModule {}