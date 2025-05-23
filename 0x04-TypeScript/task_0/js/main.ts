// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.

interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Yonatan",
    lastName: "Addis",
    age: 25,
    location: "Hawassa",
}

const student2: Student = {
    firstName: "Saron",
    lastName: "Samuel",
    age: 22,
    location: "Hawassa",
}

const studentsList : Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student1.firstName;

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student1.lastName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student1.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);