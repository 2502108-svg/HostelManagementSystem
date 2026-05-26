import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Resident {
  fullName: string;
  cnic: string;
  roomAssigned: string;
  phoneNumber: string;
  emergencyContact: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private initialResidents: Resident[] = [
    {
      fullName: 'Musa Ghori',
      cnic: '2509999',
      roomAssigned: 'Room 102',
      phoneNumber: '+92 300 1234567',
      emergencyContact: '+92 321 7654321'
    }
  ];

  private residentsSubject = new BehaviorSubject<Resident[]>(this.initialResidents);
  residents$ = this.residentsSubject.asObservable();

  private editResidentSubject = new Subject<Resident>();
  editResident$ = this.editResidentSubject.asObservable();

  getResidents() {
    return this.residentsSubject.value;
  }

  addResident(resident: Resident) {
    const currentResidents = this.getResidents();
    this.residentsSubject.next([...currentResidents, resident]);
  }

  deleteResident(cnic: string) {
    const updated = this.getResidents().filter(r => r.cnic !== cnic);
    this.residentsSubject.next(updated);
  }

  updateResident(updatedResident: Resident) {
    const updated = this.getResidents().map(r => 
      r.cnic === updatedResident.cnic ? updatedResident : r
    );
    this.residentsSubject.next(updated);
  }

  setEditResident(resident: Resident) {
    this.editResidentSubject.next(resident);
  }
}