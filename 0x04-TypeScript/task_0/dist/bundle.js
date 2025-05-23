/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)\r\n// Create two students, and create an array named studentsList containing the two variables\r\n// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table\r\n// Each row should contain the first name of the student and the location\r\n// Requirements:\r\nvar student1 = {\r\n    firstName: \"Yonatan\",\r\n    lastName: \"Addis\",\r\n    age: 25,\r\n    location: \"Hawassa\",\r\n};\r\nvar student2 = {\r\n    firstName: \"Saron\",\r\n    lastName: \"Samuel\",\r\n    age: 22,\r\n    location: \"Hawassa\",\r\n};\r\nvar studentsList = [student1, student2];\r\nvar table = document.createElement('table');\r\nstudentsList.forEach(function (student) {\r\n    var row = document.createElement('tr');\r\n    var firstNameCell = document.createElement('td');\r\n    firstNameCell.textContent = student1.firstName;\r\n    var lastNameCell = document.createElement('td');\r\n    lastNameCell.textContent = student1.lastName;\r\n    var locationCell = document.createElement('td');\r\n    locationCell.textContent = student1.location;\r\n    row.appendChild(firstNameCell);\r\n    row.appendChild(locationCell);\r\n    table.appendChild(row);\r\n});\r\ndocument.body.appendChild(table);\r\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;