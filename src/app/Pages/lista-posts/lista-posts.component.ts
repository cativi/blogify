import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { postService } from '../../services/post.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})


export class ListaPostsComponent {

  arrPosts: Post[] = [];
  arrCategorias: string[] = [];

  postService = inject(postService);

  ngOnInit() {
    this.arrPosts = this.postService.getAll();
    this.arrCategorias = this.postService.getByCategoria();
  }

  onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrPosts = this.postService.getAll();
    } else {
      this.arrPosts = this.postService.getCatPost($event.target.value);
    }
  }

}
