import { Routes } from '@angular/router';
import { ListComponent } from './views/products/list/list.component';
import { CatComponent } from './cats/cat/cat.component';

export const routes: Routes = [
    // {
    //     path:"",
    //     component: ListComponent
    // }
    {
        path:"",
        component: CatComponent
    }
];
