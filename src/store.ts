import { create } from "zustand";

interface UserStoreType {
  user: UserDataType;
  setUser: (user: UserDataType) => void;
}
interface UserDataType2 {
  id: string;
  name: string;
  image?: string;
  phoneNo?: string;
  parentNo?: string;
  address?: string;
  teaching?: boolean;
  admin?: boolean;
}
interface UserDataStoreType {
  userData: UserDataType2;
  setUserData: (userData: UserDataType2) => void;
}
interface RoleStoreType {
  role: "ADMIN" | "TEACHER" | "NONTEACHING" | "STUDENT" | "PARENT" | "AUTH";
  setRole: (
    role: "ADMIN" | "TEACHER" | "NONTEACHING" | "STUDENT" | "PARENT" | "AUTH"
  ) => void;
}

interface SchoolStoreType {
  school: SchoolDataType;
  setSchool: (school: SchoolDataType) => void;
}

interface CountType {
  users: number;
  staffs: number;
  students: number;
  parents: number;
  classes: number;
  maleStudents: number;
  femaleStudents: number;
  weeklyDailyAttendance: {
    name: string;
    present: number;
    absent: number;
  }[];
  monthlyAttendance: {
    name: string;
    present: number;
    absent: number;
  }[];
}

interface CountsStoreType {
  counts: CountType;
  setCounts: (counts: CountType) => void;
}

interface RecentsStoreType {
  recents: { announcements: number; events: number };
  setRecents: (recents: { announcements: number; events: number }) => void;
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

export const useUserData = create<UserDataStoreType>((set) => ({
  userData: {
    id: "",
    name: "John Doe",
    image: "",
  },
  setUserData: (userData: UserDataType2) => set({ userData }),
}));

export const useRole = create<RoleStoreType>((set) => ({
  role: "AUTH",
  setRole: (
    role: "ADMIN" | "TEACHER" | "NONTEACHING" | "STUDENT" | "PARENT" | "AUTH"
  ) => set({ role }),
}));

export const useSchool = create<SchoolStoreType>((set) => ({
  school: {
    id: "",
    name: "MySchool",
    address: "",
    principal: "",
    vicePrincipal: "",
    slogan: "",
    type: "PRIMARY",
    startHour: "8:00",
    closeHour: "15:00",
    missionStatement: "",
    visionStatement: "",
    primaryColor: "",
    primaryColorLight: "",
    secondaryColor: "",
    secondaryColorLight: "",
    accentColor1: "",
    accentColor1Light: "",
    accentColor2: "",
    accentColor2Light: "",
    accentColor3: "",
    accentColor3Light: "",
    logo: "",
    admins: [],
    timetableHtml: "",
  },
  setSchool: (school: SchoolDataType) => set({ school }),
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
    weeklyDailyAttendance: [
      { name: "Mon", present: 0, absent: 0 },
      { name: "Tue", present: 0, absent: 0 },
      { name: "Wed", present: 0, absent: 0 },
      { name: "Thu", present: 0, absent: 0 },
      { name: "Fri", present: 0, absent: 0 },
    ],
    monthlyAttendance: [
      { name: "January", present: 0, absent: 0 },
      { name: "February", present: 0, absent: 0 },
      { name: "March", present: 0, absent: 0 },
      { name: "April", present: 0, absent: 0 },
      { name: "May", present: 0, absent: 0 },
      { name: "June", present: 0, absent: 0 },
      { name: "July", present: 0, absent: 0 },
      { name: "August", present: 0, absent: 0 },
      { name: "September", present: 0, absent: 0 },
      { name: "October", present: 0, absent: 0 },
      { name: "November", present: 0, absent: 0 },
      { name: "December", present: 0, absent: 0 },
    ],
  },
  setCounts: (counts: CountType) => set({ counts }),
}));

export const useRecents = create<RecentsStoreType>((set) => ({
  recents: { announcements: 0, events: 0 },
  setRecents: (recents: { announcements: number; events: number }) =>
    set({ recents }),
}));

export const BACKGROUND_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1472",
  "https://images.unsplash.com/photo-1620969910995-4bbe4eaa32c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1296",
  "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1472",
  "https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1655720362145-2d8bc6718239?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
];
