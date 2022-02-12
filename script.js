// student class
class Student {
  studentID = " ";
  constructor(firstName, lastName, studyProgram, semester, year, about) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyProgram = studyProgram;
    this.semester = semester;
    this.year = year;
    this.about = about;
  }
}

var students = [];
var firstName = " ";
var lastName = " ";
var studyProgram = " ";
var semester = " ";
var year = " ";
var about = " ";
var rollNumber = "1";
var studentID = " ";
var tempStudentID = " ";
var indexToUpdate = -1;
function getValues (){
    firstName = document.querySelector(".first-name").value;
  lastName = document.querySelector(".last-name").value;
  studyProgram = document.querySelector(".study-program").value;
  semester = document.querySelector(".semester").value;
  year = document.querySelector(".year").value;
  about = document.querySelector(".about").value;
}
function updateValue() {
   getValues();
   generateStudentID();
}

function generateStudentID() {
  var firstTwoLettersOfStudyProgram = studyProgram.substring(0, 2);
  var lastTwoDigitsOfYear = year.substring(year.length - 2);

  var isSpring = "02";
  if (year.includes("spring")) {
    isSpring = "02";
  } else {
    // semester is fall
    isSpring = "04";
  }

  studentID =
    firstTwoLettersOfStudyProgram +
    lastTwoDigitsOfYear +
    isSpring +
    rollNumber.toString().padStart(5, "0");
  document.querySelector(".student-id").setAttribute("value", studentID);
}

function isExist(id){
  for(var i=0; i<students.length; i++){
      if(students[i].studentID == id){
        indexToUpdate = i 
        console.log("Student Already Exists")
        return true
      }
  }
  return false
}

function saveData() {
  if (!isExist(tempStudentID)) {
    var newStudent = new Student(
      firstName,
      lastName,
      studyProgram,
      semester,
      year,
      about
    );
    console.log("creating new student")
    newStudent.studentID = studentID;
    students.push(newStudent);
    rollNumber++;
  } 

  if(isExist(tempStudentID)){
    updateStudent(indexToUpdate)
  }

  document.querySelector(".student-id").removeAttribute("value");
  displayStudents();
}

function displayStudents() {
  document.querySelector(".content").innerHTML = " ";
  for (let i = 0; i < students.length; i++) {
    document.querySelector(".content").innerHTML +=
      students[i].firstName +
      students[i].lastName +
      students[i].studyProgram +
      '<button type="button" onClick="editData(' +
      i +
      ')">Edit</button>' +
      '<button type="button" onClick="deleteData(' +
      i +
      ')">Delete</button>';
    console.log(students[i].studentID);
    console.log(students[i]);
  }
}

function editData(i) {
  console.log("In edit data function" + i);
  firstName = students[i].firstName;
  lastName = students[i].lastName;
  studyProgram = students[i].studyProgram;
  semester = students[i].semester;
  year = students[i].year;
  about = students[i].about;
  tempStudentID = students[i].studentID;

  document.querySelector(".first-name").value = firstName;
  document.querySelector(".last-name").value = lastName;
  document.querySelector(".study-program").value = studyProgram;
  document.querySelector(".semester").value = semester;
  document.querySelector(".year").value = year;
  document.querySelector(".about").value = about;
  document.querySelector(".student-id").value = tempStudentID;
}

function updateStudent(i) {
    getValues();
    students[i].firstName = firstName;
    students[i].lastName = lastName;
    students[i].studyProgram = studyProgram;
    students[i].semester = semester;
    students[i].year = year;
    students[i].about = about;
    students[i].studentID = tempStudentID;
    displayStudents();
}

function deleteData(i) {
  students.splice(i, 1);
  displayStudents();
}
