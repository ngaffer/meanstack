import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { DataService } from './data.service';
import { ArtistComponent } from './artists/artist.component';
import { ArtistListComponent } from './artists/artist-list.component';
import { ArtistEditComponent } from './artists/artist-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistListComponent,
    ArtistEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
