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

export type DayOfWeek = 'Lunedì' | 'Martedì' | 'Mercoledì' | 'Giovedì' | 'Venerdì' | 'Sabato';

export type ScheduleCategory = 'all' | 'fitness' | 'latin' | 'baby' | 'yoga' | 'private';

export interface ScheduleItem {
  id: string;
  day: DayOfWeek;
  time: string;
  courseName: string;
  category: 'fitness' | 'latin' | 'baby' | 'yoga' | 'private';
  categoryLabel: string;
  duration?: string;
  instructor?: string;
  level?: string;
  description?: string;
}

export interface DaySchedule {
  day: DayOfWeek;
  shortDay: string;
  tagline: string;
  slots: ScheduleItem[];
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
