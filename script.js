// student class
class Student{
    studentID = " "
    constructor(firstName, lastName, studyProgram, semester, year, about){
        this.firstName = firstName
        this.lastName = lastName
        this.studyProgram = studyProgram
        this.semester = semester
        this.year = year
        this.about = about
    }
}

var firstName = " "
var lastName = " "
var studyProgram = " "
var semester = " "
var year = " "
var about = " "
var studenID = " "
var rollNumber = 0


function generateStudentID(studyProgram, year, rollNumber){
    var firstTwoLettersOfStudyProgram = studyProgram.substring(0 , 2)
    console.log(firstTwoLettersOfStudyProgram)
    console.log("calling")
}

function updateValue() {
    firstName = document.querySelector(".first-name").value
    lastName = document.querySelector(".last-name").value
    studyProgram = document.querySelector(".study-program").value
    semester = document.querySelector(".semester").value
    year = document.querySelector(".year").value
    about = document.querySelector(".about").value

    // console.log("First Name: " + firstName +
    //  " Last Name: " + lastName +
    //  " Study Program: " + studyProgram +
    //  " Semester: " + semester +
    //  " Year " + year +
    //  " About " + about)
    generateStudentID(firstName, year, rollNumber)
}






