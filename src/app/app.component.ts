import { Component } from '@angular/core';
import { Post } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et quam odio. Phasellus arcu magna, euismod gravida sceleri',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon second post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et quam odio. Phasellus arcu magna, euismod gravida sceleri',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et quam odio. Phasellus arcu magna, euismod gravida sceleri',
      loveIts: 0,
      created_at: new Date()
    }
  ];*/
  posts: Array<Post> = [
    new Post('Mon premier post', 1),
    new Post('Mon second post', -1),
    new Post('Mon troisième post', 0)
  ];
}
