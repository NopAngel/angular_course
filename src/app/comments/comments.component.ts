import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
<h3>Comentarios.</h3>
<img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg" alt="">
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores distinctio minima eligendi architecto voluptatum dolorum suscipit eveniet quisquam nihil nulla, perferendis molestias ad laudantium voluptas iste aperiam repellat rerum.
</p>
  `,
  styles: `
    img {
      width:100%;
      height:auto;
    }
  `,
})
export class CommentsComponent {

}
