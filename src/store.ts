import { create } from "zustand";

interface UserStoreType {
  user: UserDataType;
  setUser: (user: UserDataType) => void;
}

interface RoleStoreType {
  role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT" | "AUTH";
  setRole: (role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT" | "AUTH") => void;
}

interface SchoolStoreType {
  school: SchoolDataType | {};
  setSchool: (school: SchoolDataType | {}) => void;
}

interface CountType {
  users: number;
  staffs: number;
  students: number;
  parents: number;
  classes: number;
  maleStudents: number;
  femaleStudents: number;
  weeksAttendance: {
    present: number;
    absent: number;
  };
  yearsAttendance: {
    present: number;
    absent: number;
  };
}

interface CountsStoreType {
  counts: CountType;
  setCounts: (counts: CountType) => void;
}

export const useUser = create<UserStoreType>((set) => ({
  user: {
    id: "",
    name: "John Doe",
    email: "unknown",
    schoolId: "",
    role: "AUTH",
  },
  setUser: (user: UserDataType) => set({ user }),
}));

export const useRole = create<RoleStoreType>((set) => ({
  role: "AUTH",
  setRole: (role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT" | "AUTH") =>
    set({ role }),
}));

export const useSchool = create<SchoolStoreType>((set) => ({
  school: {},
  setSchool: (school: SchoolDataType | {}) => set({ school }),
}));

export const useCounts = create<CountsStoreType>((set) => ({
  counts: {
    users: 0,
    staffs: 0,
    students: 0,
    parents: 0,
    classes: 0,
    maleStudents: 0,
    femaleStudents: 0,
    weeksAttendance: {
      present: 0,
      absent: 0,
    },
    yearsAttendance: {
      present: 0,
      absent: 0,
    },
  },
  setCounts: (counts: CountType) => set({ counts }),
}));

export const BACKGROUND_IMAGES: string[] = [
  "https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/portrait-young-woman-with-laptop-hands-outside-school_641386-1029.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/portrait-male-student-with-books_23-2148882427.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/shallow-focus-shot-african-child-learning-school_181624-36498.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/happy-student-girl_23-2151936246.jpg?semt=ais_hybrid&w=740",
];
