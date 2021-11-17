import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HistoricoComponent, HistoricoComponentDialog } from './components/historico/historico.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  entryComponents: [HistoricoComponent, HistoricoComponentDialog],
  /* declarations: [HistoricoComponent, HistoricoComponentDialog], */
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
