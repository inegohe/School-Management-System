import { create } from "zustand";
import "@/components/forms/types";

interface RoleStoreType {
  role: string;
  setRole: (role: string) => void;
}

interface SchoolData extends SchoolInfo {
  students: string[];
}

interface SchoolStoreType {
  school: SchoolData | {};
  setSchool: (school: SchoolData | {}) => void;
}

export const useRole = create<RoleStoreType>((set) => ({
  role: "admin",
  setRole: (role: string) => set({ role }),
}));

export const useSchool = create<SchoolStoreType>((set) => ({
  school: {},
  setSchool: (school: SchoolData | {}) => set({ school }),
}));

export const BACKGROUND_IMAGES: string[] = [
  "https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/portrait-young-woman-with-laptop-hands-outside-school_641386-1029.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/portrait-male-student-with-books_23-2148882427.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/shallow-focus-shot-african-child-learning-school_181624-36498.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/happy-student-girl_23-2151936246.jpg?semt=ais_hybrid&w=740",
];
