import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


const ELEMENT_DATA = [
  {numCuota: 'Cuota N° 01 / 36', fechaPago: '01-03-2021', monto: '1.346.777'},
  {numCuota: 'Cuota N° 02 / 36', fechaPago: '01-04-2021', monto: '2.900.000'},
  {numCuota: 'Cuota N° 03 / 36', fechaPago: '01-05-2021', monto: '2.455.666'},
  {numCuota: 'Cuota N° 04 / 36', fechaPago: '01-06-2021', monto: '5.666.666'},
  {numCuota: 'Cuota N° 05 / 36', fechaPago: '01-07-2021', monto: '3.888.444'},
  {numCuota: 'Cuota N° 06 / 36', fechaPago: '01-08-2021', monto: '7.666.666'},
  {numCuota: 'Cuota N° 07 / 36', fechaPago: '01-09-2021', monto: '2.222.222'}
];

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-cuotas',
  templateUrl: './cuotas.component.html',
  styleUrls: ['./cuotas.component.scss']
})
export class CuotasComponent implements OnInit {

  displayedColumns: string[] = ['numCuota', 'fechaPago', 'monto', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //@ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  pruebaBoton(elem: any) {
    console.log(elem);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CuotasComponentDialog, {restoreFocus: false});
  //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'dialog-menu',
  templateUrl: 'dialog-menu.html',
  styleUrls: ['./dialog-menu.scss']
})
export class CuotasComponentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

