export interface Hospital {
  id: string;
  name: string;
  description: string;
  image: string;
  address: string;
  departments: string[];
}

export interface Doctor {
  id: string;
  name: string;
  age: number;
  qualification: string;
  department: string;
  hospitalId: string;
  rating: number;
  availableTime: string;
  availableDays: string[];
  image: string;
  experience: number;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
  doctor: Doctor;
  hospital: Hospital;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}

export interface BookingFormData {
  patientName: string;
  phone: string;
  date: string;
  time: string;
}
