import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioTaskComponent } from './componets/task/inicio-task/inicio-task.component';
import { ListTaskComponent } from './componets/task/list-task/list-task.component';

const routes: Routes = [
  {path: 'inicio', component: InicioTaskComponent},
  {path: 'list', component: ListTaskComponent},
  {path: '', redirectTo: "inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
