type SchoolInfo = {
  name: string;
  address: string;
  principal: string;
  vicePrincipal: string;
  slogan: string;
  type: "Primary" | "Junior" | "Senior";
  startHour: string;
  closeHour: string;
  missionStatement: string;
  visionStatement: string;
  primaryColor: string;
  primaryColorLight: string;
  secondaryColor: string;
  secondaryColorLight: string;
  accentColor1: string;
  accentColor1Light: string;
  accentColor2: string;
  accentColor2Light: string;
  accentColor3: string;
  accentColor3Light: string;
  logo: string;
};

interface StaffData {
  name: string;
  email: string;
  oracleNo: string;
  registrationNo: string;
  designation: string;
  post: string;
  payrollNo: string;
  level: string;
  yearOfExit: string;
  address: string;
  phoneNo: string;
  yearOfService: string;
  teaching: boolean;
  admin: boolean;
}

interface StudentData {
  name: string;
  email: string;
  parentNo: string;
  parentName: string;
  registrationNo: string;
  DOA: string;
  birthdate: string;
  admissionNo: string;
  gender: string;
  class: string;
  address: string;
}

interface ParentData {
  name: string;
  email: string;
  phoneNo: string;
  address: string;
}

interface ClassData {
  name: string;
  classTeacher: string;
  totalStudent: number;
}

interface Timetable {
  class: string;
  day: string;
  period: number;
  periodSpan: number;
  subject: string;
  startTime: string;
  endTime: string;
}

type Subject = string;

type TotalData = {
  schoolData: SchoolInfo | {};
  staffsData: StaffData[] | [];
  admins: StaffData[] | [];
  studentsData: StudentData[] | [];
  parentsData: ParentData[] | [];
  subjects: Subject[] | [];
  classes: ClassData[] | [];
  timetable: Timetable[] | [];
  timetableHtml: string;
};
