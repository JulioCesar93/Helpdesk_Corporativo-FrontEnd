import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'analistas',            component:   AnalistaListComponent },
      { path: 'analistas/create',     component: AnalistaCreateComponent },
      { path: 'analistas/update/:id', component: AnalistaUpdateComponent },
      { path: 'analistas/delete/:id', component: AnalistaDeleteComponent },

      { path: 'associados',            component:   AssociadoListComponent },
      { path: 'associados/create',     component: AssociadoCreateComponent },
      { path: 'associados/update/:id', component: AssociadoUpdateComponent },
      { path: 'associados/delete/:id', component: AssociadoDeleteComponent },

      { path: 'ocorrencia',                       component:     OcorrenciaListComponent },
      { path: 'ocorrencia/create',                component:   OcorrenciaCreateComponent },
      { path: 'ocorrencia/update/:id',            component:   OcorrenciaUpdateComponent },
      { path: 'ocorrencia/read/:id',              component:    OcorrenciaReadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
