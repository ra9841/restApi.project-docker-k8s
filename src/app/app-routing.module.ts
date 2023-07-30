import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FotterComponent } from './fotter/fotter.component';
import { FrameComponent } from './frame/frame.component';
import { NavComponent } from './nav/nav.component';
import { BodyIIComponent } from './body-ii/body-ii.component';
import { RecordTblComponent } from './record-tbl/record-tbl.component';
import { EditShwComponent } from './edit-shw/edit-shw.component';
import { AuthGuard } from './service/auth.login';


const routes: Routes = [
  {path:"body",component:BodyComponent },
  {path:"fotter",component:FotterComponent},
  {path:"frame",component:FrameComponent},
  {path:"nav",component:NavComponent},
  {path:'bodyii',component:BodyIIComponent},
  {path:'recordTbl',component:RecordTblComponent,canActivate: [AuthGuard]},
  {path:'edit/:id',component:EditShwComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
