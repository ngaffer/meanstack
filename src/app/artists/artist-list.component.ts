import { Component } from '@angular/core';

import { Artist } from './artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent {
	artist: Artist = new Artist('Natasha', 'Gaffer', 'ngaffer@gmail.com', '5075813719', 'This is a short blurb about myself.');
}
