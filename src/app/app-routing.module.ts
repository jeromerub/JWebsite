import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ArticlesPage} from "./pages/articles/articles";
import {Homepage} from "./pages/homepage/homepage";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: Homepage},
  {path: 'articles', component: ArticlesPage},


  // otherwise redirect to 404
  // {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
