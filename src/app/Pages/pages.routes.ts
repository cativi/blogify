import { Routes } from "@angular/router";
import { ListaPostsComponent } from "./lista-posts/lista-posts.component";
import { NuevoPostComponent } from "./nuevo-post/nuevo-post.component";

export const pagesRoutes: Routes = [
    { path: 'posts', component: ListaPostsComponent },
    { path: 'new', component: NuevoPostComponent }
];
