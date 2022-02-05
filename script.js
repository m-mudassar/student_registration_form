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
var rollNumber = 00001
var studenID = " "

function updateValue() {
    firstName = document.querySelector(".first-name").value
    lastName = document.querySelector(".last-name").value
    studyProgram = document.querySelector(".study-program").value
    semester = document.querySelector(".semester").value
    year = document.querySelector(".year").value
    about = document.querySelector(".about").value
    
    
    console.log("First Name: " + firstName +
     " Last Name: " + lastName +
     " Study Program: " + studyProgram +
     " Semester: " + semester +
     " Year " + year +
     " About " + about)

    var firstTwoLettersOfStudyProgram = studyProgram.substring(0 , 2)
    var lastTwoDigitsOfYear = year.substring(year.length - 2)
   // studenID = studenID + firstTwoLettersOfStudyProgram + lastTwoDigitsOfYear
    
    // if the semester is spring 
    // we will simply append 02
    // else we will append 04
    var isSpring = "02"
    if(year.includes("spring")){
        isSpring = "02"
    } else {
        // semester is fall
        isSpring = "04"
    }

    studenID = firstTwoLettersOfStudyProgram + lastTwoDigitsOfYear + isSpring + rollNumber
    rollNumber++
    
    studentID = document.querySelector(".student-id").setAttribute("value", studenID)    
}






