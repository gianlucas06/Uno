import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PanelaConsultaComponent } from './Produccion/panela-consulta/panela-consulta.component';
import { PanelaRegistroComponent } from './Produccion/panela-registro/panela-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelaService } from './services/panela.service';
import { FiltroProductoPipe } from './pipe/filtro-producto.pipe';
import { LogginComponent } from './loggin/loggin.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PanelaConsultaComponent,
    PanelaRegistroComponent,
    FiltroProductoPipe,
    LogginComponent,
    AlertModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [PanelaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
