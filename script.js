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



var students = []
var firstName = " "
var lastName = " "
var studyProgram = " "
var semester = " "
var year = " "
var about = " "
var rollNumber = "1"
var studentID = " "


function updateValue() {
    firstName = document.querySelector(".first-name").value
    lastName = document.querySelector(".last-name").value
    studyProgram = document.querySelector(".study-program").value
    semester = document.querySelector(".semester").value
    year = document.querySelector(".year").value
    about = document.querySelector(".about").value

    var firstTwoLettersOfStudyProgram = studyProgram.substring(0 , 2)
    var lastTwoDigitsOfYear = year.substring(year.length - 2)
    
    var isSpring = "02"
    if(year.includes("spring")){
        isSpring = "02"
    } else {
        // semester is fall
        isSpring = "04"
    }

    studentID = firstTwoLettersOfStudyProgram + lastTwoDigitsOfYear + isSpring + (rollNumber).toString().padStart(5, "0")
    document.querySelector(".student-id").setAttribute("value", studentID)    
}

function saveData(){
    var newStudent = new Student(firstName, lastName, studyProgram, semester, year, about)
    newStudent.studentID = studentID
    students.push(newStudent)
    rollNumber++
    document.querySelector(".student-id").removeAttribute("value")
    displayData()
}

function displayData(){
    document.querySelector(".content").innerHTML = ' '
    for (let i = 0; i < students.length; i++) {
       document.querySelector(".content").innerHTML += ' <button type="button" onClick="editData(' + i + ')">Edit</button> ' +
       '<button type="button" onClick="deleteData(' + i + ')">Delete</button>'
       console.log(students[i].studentID)
       console.log(students[i])        
    }
}

function editData(i){
    console.log("In edit data function" + i)
}

function deleteData(i){
    students.splice(i, 1)
    displayData()
}









