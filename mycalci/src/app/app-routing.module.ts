import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './global_components/body/body.component'
import { HeaderComponent }from './global_components/header/header.component'
import { FooterComponent } from './global_components/footer/footer.component';

const routes: Routes = [
  {path:'',redirectTo:'body', pathMatch:'full'},
  {path:'body',component: BodyComponent},
  {path:'header',component: HeaderComponent},
  {path:'footer',component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
