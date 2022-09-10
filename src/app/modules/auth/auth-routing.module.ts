import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GithubAuthComponent } from "./components/github-auth/github-auth.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    },
    {
        path: 'github-auth',
        component: GithubAuthComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}