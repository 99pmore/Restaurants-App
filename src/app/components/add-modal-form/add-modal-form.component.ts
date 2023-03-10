import { RestaurantDBService } from './../../services/restaurant-db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { NewCategoryModalComponent } from '../new-category-modal/new-category-modal.component';

@Component({
  selector: 'app-add-modal-form',
  templateUrl: './add-modal-form.component.html',
  styleUrls: ['./add-modal-form.component.scss']
})
export class AddModalFormComponent implements OnInit {

  formGroup!: FormGroup

  prices = [
    { value: 1, viewValue: '[ 0 - 10 ] €' },
    { value: 2, viewValue: '[ 10 - 20 ] €' },
    { value: 3, viewValue: '[ 20 - 30 ] €' },
    { value: 4, viewValue: '[ 30 - ] €' },
  ];

  categories = [
    { value: 'español', viewValue: 'Español' },
    { value: 'americano', viewValue: 'Americano' },
    { value: 'italiano', viewValue: 'Italiano' },
    { value: 'japones', viewValue: 'Japonés' },
    { value: 'chino', viewValue: 'Chino' },
    { value: 'mexicano', viewValue: 'Mexicano' },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private restaurantDBService: RestaurantDBService,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      categories: [[], Validators.required],
      price: [null],
      rate: [null],
      // image: [null, Validators.required]
    })
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
    } else {
      this.snackBar.open('Faltan campos por completar', 'Cerrar', {
        duration: 3000
      })
    }
  }

  public addCategory() {
    const dialogRef = this.dialog.open(NewCategoryModalComponent)
  
    dialogRef.componentInstance.categoryAdded.subscribe(newCategory => {
      if (newCategory) {
        this.categories.push({ value: newCategory, viewValue: newCategory })
        this.formGroup.get('categories')?.setValue([...this.formGroup.get('categories')?.value, newCategory])
      }
    })
  }

  // onFileSelected(event): void {
  //   const file = event.target.files[0];
  //   this.formGroup.get('image').setValue(file);
  // }

}
