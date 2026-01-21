import { Hospital, Doctor } from "@/types/booking";

export const hospitals: Hospital[] = [
  {
    id: "ahalia-heritage",
    name: "Ahalia Health, Heritage & Knowledge Village",
    description: "A comprehensive healthcare facility offering world-class medical services with state-of-the-art infrastructure.",
    image: "/hospitals/heritage.jpg",
    address: "Palakkad, Kerala",
    departments: ["General Medicine", "Cardiology", "Orthopedics", "Neurology", "Pediatrics"],
  },
  {
    id: "ahalia-women-children",
    name: "Ahalia Women And Children's Hospital",
    description: "Specialized care for women and children with expert gynecologists and pediatricians.",
    image: "/hospitals/women-children.jpg",
    address: "Palakkad, Kerala",
    departments: ["Gynecology", "Obstetrics", "Pediatrics", "Neonatology"],
  },
  {
    id: "ahalia-diabetes",
    name: "Ahalia Diabetes Hospital",
    description: "Leading diabetes care center with comprehensive treatment and management programs.",
    image: "/hospitals/diabetes.jpg",
    address: "Palakkad, Kerala",
    departments: ["Diabetology", "Endocrinology", "Nutrition", "Podiatry"],
  },
  {
    id: "ahalia-eye",
    name: "Ahalia Foundation Eye Hospital",
    description: "Advanced eye care facility with cutting-edge technology for all ophthalmological needs.",
    image: "/hospitals/eye.jpg",
    address: "Palakkad, Kerala",
    departments: ["Ophthalmology", "Retina", "Glaucoma", "Cataract"],
  },
  {
    id: "ahalia-ayurveda",
    name: "Ahalia Ayurveda Medical College Hospital",
    description: "Traditional Ayurvedic treatments combined with modern healthcare practices.",
    image: "/hospitals/ayurveda.jpg",
    address: "Palakkad, Kerala",
    departments: ["Panchakarma", "Kayachikitsa", "Yoga Therapy", "Herbal Medicine"],
  },
  {
    id: "hospital-ahalia",
    name: "Hospital Ahalia",
    description: "Multi-specialty hospital providing comprehensive healthcare solutions.",
    image: "/hospitals/main.jpg",
    address: "Palakkad, Kerala",
    departments: ["General Surgery", "ENT", "Dermatology", "Psychiatry", "Dental"],
  },
];

export const doctors: Doctor[] = [
  // Ahalia Heritage Hospital Doctors
  {
    id: "dr-arun-kumar",
    name: "Dr. Arun Kumar",
    age: 45,
    qualification: "MBBS, MD (General Medicine)",
    department: "General Medicine",
    hospitalId: "ahalia-heritage",
    rating: 4.8,
    availableTime: "9:00 AM - 5:00 PM",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    image: "/doctors/male-1.jpg",
    experience: 18,
  },
  {
    id: "dr-priya-menon",
    name: "Dr. Priya Menon",
    age: 42,
    qualification: "MBBS, DM (Cardiology)",
    department: "Cardiology",
    hospitalId: "ahalia-heritage",
    rating: 4.9,
    availableTime: "10:00 AM - 4:00 PM",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    image: "/doctors/female-1.jpg",
    experience: 15,
  },
  {
    id: "dr-rajesh-nair",
    name: "Dr. Rajesh Nair",
    age: 50,
    qualification: "MBBS, MS (Orthopedics)",
    department: "Orthopedics",
    hospitalId: "ahalia-heritage",
    rating: 4.7,
    availableTime: "8:00 AM - 2:00 PM",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    image: "/doctors/male-2.jpg",
    experience: 22,
  },
  // Women & Children Hospital Doctors
  {
    id: "dr-lakshmi-devi",
    name: "Dr. Lakshmi Devi",
    age: 48,
    qualification: "MBBS, MD (Gynecology)",
    department: "Gynecology",
    hospitalId: "ahalia-women-children",
    rating: 4.9,
    availableTime: "9:00 AM - 3:00 PM",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    image: "/doctors/female-2.jpg",
    experience: 20,
  },
  {
    id: "dr-suresh-babu",
    name: "Dr. Suresh Babu",
    age: 44,
    qualification: "MBBS, MD (Pediatrics)",
    department: "Pediatrics",
    hospitalId: "ahalia-women-children",
    rating: 4.8,
    availableTime: "10:00 AM - 6:00 PM",
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    image: "/doctors/male-3.jpg",
    experience: 16,
  },
  // Diabetes Hospital Doctors
  {
    id: "dr-maya-krishnan",
    name: "Dr. Maya Krishnan",
    age: 46,
    qualification: "MBBS, MD (Diabetology)",
    department: "Diabetology",
    hospitalId: "ahalia-diabetes",
    rating: 4.9,
    availableTime: "9:00 AM - 5:00 PM",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
    image: "/doctors/female-3.jpg",
    experience: 18,
  },
  // Eye Hospital Doctors
  {
    id: "dr-krishna-pillai",
    name: "Dr. Krishna Pillai",
    age: 52,
    qualification: "MBBS, MS (Ophthalmology)",
    department: "Ophthalmology",
    hospitalId: "ahalia-eye",
    rating: 4.8,
    availableTime: "8:00 AM - 4:00 PM",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    image: "/doctors/male-4.jpg",
    experience: 25,
  },
  // Ayurveda Hospital Doctors
  {
    id: "dr-anitha-varma",
    name: "Dr. Anitha Varma",
    age: 40,
    qualification: "BAMS, MD (Ayurveda)",
    department: "Panchakarma",
    hospitalId: "ahalia-ayurveda",
    rating: 4.7,
    availableTime: "9:00 AM - 5:00 PM",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    image: "/doctors/female-4.jpg",
    experience: 14,
  },
  // Main Hospital Doctors
  {
    id: "dr-vivek-sharma",
    name: "Dr. Vivek Sharma",
    age: 47,
    qualification: "MBBS, MS (General Surgery)",
    department: "General Surgery",
    hospitalId: "hospital-ahalia",
    rating: 4.8,
    availableTime: "8:00 AM - 2:00 PM",
    availableDays: ["Monday", "Wednesday", "Friday"],
    image: "/doctors/male-5.jpg",
    experience: 19,
  },
  {
    id: "dr-deepa-nair",
    name: "Dr. Deepa Nair",
    age: 38,
    qualification: "MBBS, MD (Dermatology)",
    department: "Dermatology",
    hospitalId: "hospital-ahalia",
    rating: 4.6,
    availableTime: "10:00 AM - 6:00 PM",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    image: "/doctors/female-5.jpg",
    experience: 12,
  },
];

export const getHospitalById = (id: string): Hospital | undefined => {
  return hospitals.find((h) => h.id === id);
};

export const getDoctorsByHospital = (hospitalId: string): Doctor[] => {
  return doctors.filter((d) => d.hospitalId === hospitalId);
};

export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find((d) => d.id === id);
};

export const getDoctorsByDepartment = (department: string): Doctor[] => {
  return doctors.filter((d) => d.department === department);
};

export const getAllDepartments = (): string[] => {
  const departments = new Set<string>();
  hospitals.forEach((h) => h.departments.forEach((d) => departments.add(d)));
  return Array.from(departments);
};
