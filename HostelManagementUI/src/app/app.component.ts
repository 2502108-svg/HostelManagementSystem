import { Component } from '@angular/core';
import { ResidentFormComponent } from './resident-form/resident-form';
import { ResidentListComponent } from './resident-list/resident-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResidentFormComponent, ResidentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HostelManagementUI';
}