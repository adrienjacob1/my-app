import { NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { FaceSnapListComponent } from "./face-snaps/components/face-snap-list/face-snap-list.component";
import { SingleFaceSnapComponent } from "./face-snaps/components/single-face-snap/single-face-snap.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { NewFaceSnapComponent} from "./face-snaps/components/new-face-snap/new-face-snap.component";
import { AuthGuard } from "./core/guards/auth.guards";


const routes: Routes = [ {
    path: 'facesnaps/:id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]
}, {
    path: 'facesnaps', component: FaceSnapListComponent, canActivate: [AuthGuard]
},
{
    path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]
},

{
    path: "", component: LandingPageComponent
}

];
    

@NgModule ( {
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
} )

export class AppRoutingModule {}