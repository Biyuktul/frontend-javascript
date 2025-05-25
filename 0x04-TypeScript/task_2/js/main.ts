interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    WorkDirecotorTasks() : string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    WorkTeacherTasks() : string;
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
    WorkTeacherTasks() : string {
      return "Getting to work"
    }
}

function createEmployee (salary : number | string) : Director | Teacher {
  if (typeof salary == "number" && salary < 500){
    return new Teacher();
  }
  return new Director();
}


function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    employee.WorkDirecotorTasks();
  } else {
    employee.WorkTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  return "";
}