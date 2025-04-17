type SchoolInfo = {
  name: string;
  address: string;
  principal: string;
  vicePrincipal: string;
  slogan: string;
  schoolType: "Primary" | "Junior" | "Senior";
  startHour: string;
  closeHour: string;
  primaryColor: string;
  secondaryColor: string;
  mutedColor: string;
  accentColor: string;
  logoImage: string;
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
  subjects: Subject[] | [];
  classes: ClassData[] | [];
  timetable: Timetable[] | [];
  timetableHtml: string;
};
