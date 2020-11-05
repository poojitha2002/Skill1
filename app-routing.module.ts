import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChinaComponent } from './china/china.component';
import { ChristComponent } from './christ/christ.component';
import { CichenComponent } from './cichen/cichen.component';
import { MachuComponent } from './machu/machu.component';
import { PetraComponent } from './petra/petra.component';
import { RomanComponent } from './roman/roman.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';

const routes: Routes = [
  {path:'tajmahal',component:TajmahalComponent},
  {path:'china',component:ChinaComponent},
  {path:'christ',component:ChristComponent},
  {path:'cichen',component:CichenComponent},
  {path:'machu',component:MachuComponent},
  {path:'petra',component:PetraComponent},
  {path:'roman',component:RomanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
