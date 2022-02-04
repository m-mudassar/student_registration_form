class Student{
    studentID = " "
    constructor(firstName, lastName, studyProgram, semester, year, description){
        this.firstName = firstName
        this.lastName = lastName
        this.studyProgram = studyProgram
        this.semester = semester
        this.year = year
        this.description = description
    }
}

var st = new Student("mudassar", "malik", "bsse", "Fall2018")
console.log(st.firstName) 
console.log(st.lastName)
console.log(st.studyProgram) 

