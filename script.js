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
const save = document.querySelector(".save");
const reset = document.querySelector(".reset");

function getValues (){
  firstName = document.querySelector(".first-name").value;
  lastName = document.querySelector(".last-name").value;
  studyProgram = document.querySelector(".study-program").value;
  semester = document.querySelector(".semester").value;
  year = document.querySelector(".year").value;
  about = document.querySelector(".about").value;
}

function validateStudent(){
  getValues()
  if (firstName == ''){
    document.querySelector(".first-name").style.border = "1px solid red";
    return false;
  } else{
    document.querySelector(".first-name").style.border = "1px solid gray";
  }

  if (lastName == ''){
    document.querySelector(".last-name").style.border = "1px solid red";
    return false;
  } else{
    document.querySelector(".last-name").style.border = "1px solid gray";
  }
  return true;
}

function updateValue() {
   validateStudent();
   getValues();
   generateStudentID();
   save.disabled = false;
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

// Returns true if the student already exists
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
  if(validateStudent()){
    if (!isExist(tempStudentID)) {
      var newStudent = new Student(
        firstName,
        lastName,
        studyProgram,
        semester,
        year,
        about
      );
      newStudent.studentID = studentID;
      students.push(newStudent);
      rollNumber++;
      save.disabled = true
      reset.click();
    } 
  
    if(isExist(tempStudentID)){
      updateStudent(indexToUpdate);
      reset.click();
    }
  }
  
  document.querySelector(".student-id").removeAttribute("value");
  displayStudents();
}

// Template for displaying the data for students
function displayStudents() {
  document.querySelector(".data").innerHTML = " ";
  for (let i = 0; i < students.length; i++) {
    document.querySelector(".data").innerHTML +=
   ' <div class="content"> ' +
   '   <div class="std-data"> ' +
   '     <h3> Name:  <span> ' + students[i].firstName + ' ' + students[i].lastName + ' </span></h3> ' + 
   '     <h3>Student ID: <span> ' + students[i].studentID + ' </span></h3> ' +
   '     <h3>Study program: <span> ' + students[i].studyProgram + ' </span></h3> ' + 
   '     <h3>Semester No: <span> ' + students[i].semester + ' </span></h3> ' +
   '     <h3>Year: <span> ' + students[i].year + ' </span></h3> ' + 
   '     <h3>About:</h3> ' +
   '     <h3>' + students[i].about + '</h3> ' +
   '   </div> ' +
   '   <div class="buttons"> ' +
   '   <button type="button" class="btn edit-btn" onclick="editData(' + i + ')">Edit</button> ' + 
   '    <button type="button" class="btn delete-btn" onclick="deleteData(' + i + ')">Delete</button> ' + 
   '   </div> ' +
   ' </div> ';
  }
}


// After getting the position i in array
function editData(i) {

  // Loading data into variables
  firstName = students[i].firstName;
  lastName = students[i].lastName;
  studyProgram = students[i].studyProgram;
  semester = students[i].semester;
  year = students[i].year;
  about = students[i].about;
  tempStudentID = students[i].studentID;

  // Loading data into form
  document.querySelector(".first-name").value = firstName;
  document.querySelector(".last-name").value = lastName;
  document.querySelector(".study-program").value = studyProgram;
  document.querySelector(".semester").value = semester;
  document.querySelector(".year").value = year;
  document.querySelector(".about").value = about;
  document.querySelector(".student-id").value = tempStudentID;
}

// updating the record of a student
function updateStudent(i) {

  // 1. Getting values from form fields
    getValues();

  // 2. Setting values at position i
    students[i].firstName = firstName;
    students[i].lastName = lastName;
    students[i].studyProgram = studyProgram;
    students[i].semester = semester;
    students[i].year = year;
    students[i].about = about;
    students[i].studentID = tempStudentID;

    // 3. Refreshing the students list for the updated list
    displayStudents();
}

// Delete students
function deleteData(i) {
  students.splice(i, 1);
  displayStudents();
}
