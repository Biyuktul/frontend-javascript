interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    Location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction{
    (firstName: string, lastName: string) : string;
}

const printTeacher : printTeacherFunction = (firstName, lastName) => {
    let fullName = firstName[0] + " " + lastName;
    return fullName;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    WorkDirecotorTasks() : string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    WorkDirecotorTasks() : string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home"
    }
    getCoffeeBreak() : string {
      return "Getting a coffee break"
    }
    WorkDirecotorTasks() : string {
      return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
      return "Cannot work from home"
    }
    getCoffeeBreak() : string {
      return "Cannot have a break"
    }
    WorkDirecotorTasks() : string {
      return "Getting to work"
    }
}

function createEmployee (salary : number | string) : Director | Teacher {
  if (typeof salary == "number" && salary < 500){
    return new Teacher();
  }
  return new Director();
}
