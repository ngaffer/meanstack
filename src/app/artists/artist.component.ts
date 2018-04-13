import { Component, Input } from '@angular/core';

import { Artist } from './artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
	@Input('inputartist') artist: Artist;

	onEdit() {
		//show the edit form by changing a class or other special functionality
	}
}