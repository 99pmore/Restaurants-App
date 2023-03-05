import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddModalFormComponent } from '../add-modal-form/add-modal-form.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddModalFormComponent)

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`)
    })
  }

}
