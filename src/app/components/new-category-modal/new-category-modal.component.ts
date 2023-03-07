import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-category-modal',
  templateUrl: './new-category-modal.component.html',
  styleUrls: ['./new-category-modal.component.scss']
})
export class NewCategoryModalComponent implements OnInit {

  formGroup!: FormGroup

  @Output() categoryAdded = new EventEmitter()
  public newCategory = ''

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      newCategory: ['']
    })
  }

  public save() {
    this.categoryAdded.emit(this.newCategory)
  }

}
