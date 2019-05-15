import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getPostIsLoved() {
    if (this.postLoveIts > 0) {
      return true;
    } else if (this.postLoveIts < 0) {
      return false;
    }
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  onLoveIt() {
    this.postLoveIts = this.postLoveIts + 1;
  }

  onDontLoveIt() {
    this.postLoveIts = this.postLoveIts - 1;
  }
}
