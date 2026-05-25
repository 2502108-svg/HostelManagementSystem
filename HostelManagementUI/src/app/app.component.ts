import { Component } from '@angular/core';
import { ResidentListComponent } from './resident-list/resident-list';
import { ResidentFormComponent } from './resident-form/resident-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResidentListComponent, ResidentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HostelManagementUI';
}