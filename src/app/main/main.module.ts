import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreditosComponent } from './../components/creditos/creditos.component';
import { DetalleCreditoComponent, SnackErrorComponent, SnackSuccessComponent } from './../components/detalle-credito/detalle-credito.component';
import { CuotasComponent, CuotasComponentDialog } from './../components/cuotas/cuotas.component';
import { HistoricoComponent, HistoricoComponentDialog } from './../components/historico/historico.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MainComponent,
    CreditosComponent,
    CuotasComponent,
    HistoricoComponent,
    HistoricoComponentDialog,
    CuotasComponentDialog,
    DetalleCreditoComponent,
    SnackErrorComponent,
    SnackSuccessComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    NgxSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatStepperModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  exports: [
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
