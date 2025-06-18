import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { CertificadosFormComponent } from './pages/certificado-form/certificado-form.component';

export const routes: Routes = [
  {
    path: '',
    component: CertificadosComponent,
  },
  {
    path: 'certificados/novo',
    component: CertificadosFormComponent,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent,
  },
];
