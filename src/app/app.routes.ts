import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { AuthGuard } from "./services/auth.guard";
import { ArticleComponent } from "./views/article/article.component";
import { HomeComponent } from "./frotend/home/home.component";
import { ShowArticleComponent } from "./frotend/show-article/show-article.component";

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    // canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: "article",
    // canActivate: [AuthGuard],
    component: ShowArticleComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  // {
  //   path: "article",
  //   // canActivate: [AuthGuard],
  //   component: ArticleComponent
  // },
  {
    path: "**",
    redirectTo: "/home"
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
