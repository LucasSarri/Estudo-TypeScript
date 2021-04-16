import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'teste', component: TesteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }