import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentService, Resident } from '../resident.service';

@Component({
  selector: 'app-resident-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resident-list.html',
  styleUrl: './resident-list.css'
})
export class ResidentListComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentService: ResidentService) {}

  ngOnInit(): void {
    this.loadResidents();
  }

  // Helper method to fetch live data from the API
  loadResidents(): void {
    this.residentService.getResidents().subscribe({
      next: (data) => this.residents = data,
      error: (err) => console.error('Error fetching database records:', err)
    });
  }

  onDelete(cnic: string): void {
    if (confirm('Are you sure you want to remove this resident?')) {
      this.residentService.deleteResident(cnic).subscribe({
        next: () => this.loadResidents(), // Reload the UI layout automatically on success
        error: (err) => console.error('Delete action failed:', err)
      });
    }
  }

  onEdit(resident: Resident): void {
    this.residentService.setEditResident(resident);
  }
}