import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private toastService: ToastService) { }

  studentForm: FormGroup;

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      emailAddress: [null, Validators.email],
      occupation: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  saveStudent() {
    if (this.studentForm.invalid) {
      this.studentForm.markAsDirty();
      this.toastService.showError('Form Invalid');
    } else {
      this.toastService.showSuccess('Form Saved');
      this.studentForm.reset();
    }
  }
}
