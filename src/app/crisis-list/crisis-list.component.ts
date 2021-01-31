import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crisis-list',
  template: ``,
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}

