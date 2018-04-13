import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent {
	@Output() saveClicked = new EventEmitter<string>();

	onSave() {
		//update the firstname of the artist-list component and pass to artist component
		this.saveClicked.emit('Krumbie');
	}

}
