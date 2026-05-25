import { Component } from '@angular/core';
import { ResidentListComponent } from './resident-list/resident-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResidentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HostelManagementUI';
}