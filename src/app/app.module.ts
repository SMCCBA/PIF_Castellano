import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CVComponent } from './components/cv/cv.component';
import { RSComponent } from './components/rs/rs.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ELComponent } from './components/el/el.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PieComponent } from './components/pie/pie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CVComponent,
    RSComponent,
    BannerComponent,
    AcercaDeComponent,
    ELComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PieComponent,

  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
