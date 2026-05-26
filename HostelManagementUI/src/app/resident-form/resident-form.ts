import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-resident-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resident-form.html',
  styleUrl: './resident-form.css'
})
export class ResidentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder, private residentService: ResidentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      cnic: ['', Validators.required],
      roomAssigned: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emergencyContact: ['', Validators.required]
    });

    this.residentService.editResident$.subscribe(resident => {
      if (resident) {
        this.isEditMode = true;
        this.studentForm.patchValue(resident);
        this.studentForm.get('cnic')?.disable();
      }
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formData = this.studentForm.getRawValue();

      if (this.isEditMode) {
        this.residentService.updateResident(formData).subscribe({
          next: () => this.handleSuccess(),
          error: (err) => console.error('Update operation failed:', err)
        });
      } else {
        this.residentService.addResident(formData).subscribe({
          next: () => this.handleSuccess(),
          error: (err) => console.error('Save registration failed:', err)
        });
      }
    }
  }

  private handleSuccess(): void {
    this.isEditMode = false;
    this.studentForm.get('cnic')?.enable();
    this.studentForm.reset();
    
    // Force a page-level data sync automatically
    window.location.reload();
  }
}