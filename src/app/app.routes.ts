import { Routes } from '@angular/router';
import { ListComponent } from './articles/list.component';
import { EditComponent } from './articles/edit/edit.component';
import { DetailComponent } from './articles/detail/detail.component';

export const routes: Routes = [
    {
        path:"",
        component: ListComponent
    },
    {
        path:"list",
        component: ListComponent
    },
    {
        path:"home",
        redirectTo: "list",
        pathMatch:"full"
    },
    {
        path:"edit/:id",
        component: EditComponent
    },
    {
        path:"detail/:id",
        component: DetailComponent
    },
    {
        path: "**",
        redirectTo: "/list",
        pathMatch:"full"
    }
];
