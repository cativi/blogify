import { Routes } from '@angular/router';
import { ListaPostsComponent } from './Pages/lista-posts/lista-posts.component';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/posts' },
    { path: 'posts', component: ListaPostsComponent },
    {
        path: 'posts',
        loadChildren: () => import('./Pages/pages.routes').
            then(m => m.pagesRoutes)

    },
    { path: '**', redirectTo: '/posts' }
];
