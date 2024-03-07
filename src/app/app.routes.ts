import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiaDeSorteComponent } from './loterias/dia-de-sorte/dia-de-sorte.component';
import { DuplasenaComponent } from './loterias/duplasena/duplasena.component';
import { LotofacilComponent } from './loterias/lotofacil/lotofacil.component';
import { LotomaniaComponent } from './loterias/lotomania/lotomania.component';
import { MegasenaComponent } from './loterias/megasena/megasena.component';
import { MilionariaComponent } from './loterias/milionaria/milionaria.component';
import { QuinaComponent } from './loterias/quina/quina.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'diaDeSorte', component: DiaDeSorteComponent
  },
  {
    path: 'duplasena', component: DuplasenaComponent
  },
  {
    path: 'lotofacil', component: LotofacilComponent
  },
  {
    path: 'lotomania', component: LotomaniaComponent
  },
  {
    path: 'megasena', component: MegasenaComponent
  },
  {
    path: 'milionaria', component: MilionariaComponent
  },
  {
    path: 'quina', component: QuinaComponent
  },

];
