import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateBlogComponent } from "./components/create-blog/create-blog.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CreateBlogComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateBlogRoutingModule {}