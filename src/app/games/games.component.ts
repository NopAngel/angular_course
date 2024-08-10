import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <ul>
    <h3>Los juegos guardados de {{username}}</h3>
    @for (game of games; track game.id) {
      <li (click)="fav(game.name)">
        {{game.name}}
      </li>
    }
  </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = ''
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
  }
  games = [
    {
      id: 1,
      name: "Uncharted 4"
    },{
      id: 2,
      name: "Horizon Zero Dawn"
    },{
      id: 3,
      name: "Super Mario Bros"
    }
  ]
}
