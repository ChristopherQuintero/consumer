import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-credito',
  templateUrl: './detalle-credito.component.html',
  styleUrls: ['./detalle-credito.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class DetalleCreditoComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  duration = 3000;

  constructor(
    private location: Location,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackSuccessBar() {
    /* this._snackBar.openFromComponent(SnackSuccessComponent, {
      duration: this.durationInSeconds * 1000,
    }); */
    this._snackBar.openFromComponent(SnackSuccessComponent, {
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
    });
  }

  openSnackErrorBar() {
    this._snackBar.openFromComponent(SnackErrorComponent, {
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      /* verticalPosition: this.verticalPosition, */
    });
  }

  backLocation() {
    this.location.back();
  }

}

@Component({
  selector: 'snack-error',
  templateUrl: 'snack-error.html',
  styles: [`
    .text {
        color: #444444;
        font-size: 12px;
    }
    .icon {
      color: #3A8340;
    }
  `],
})
export class SnackErrorComponent {}

@Component({
  selector: 'snack-success',
  templateUrl: 'snack-success.html',
  styles: [`
    .text {
        color: #444444;
        font-size: 12px;
    }
    .icon {
      color: #3A8340;
    }
  `],
})
export class SnackSuccessComponent {}
