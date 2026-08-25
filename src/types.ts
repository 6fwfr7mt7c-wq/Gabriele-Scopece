export interface Review {
  id: string;
  name: string;
  initial: string;
  rating: number;
  date?: string;
  comment: string;
  source: 'Google' | 'Direct';
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  schedule: string;
  instructor: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  courseInterest?: string;
  message: string;
}

export interface TrialBookingData {
  name: string;
  email: string;
  phone: string;
  preferredCourse: string;
  preferredDay: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  notes?: string;
}
