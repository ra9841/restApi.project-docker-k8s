import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FrameComponent } from './frame/frame.component';
import { FotterComponent } from './fotter/fotter.component';
import { FormsModule } from '@angular/forms';
import { BodyIIComponent } from './body-ii/body-ii.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordTblComponent } from './record-tbl/record-tbl.component';
import { EditShwComponent } from './edit-shw/edit-shw.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FrameComponent,
    FotterComponent,
    BodyIIComponent,
    RecordTblComponent,
    EditShwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
