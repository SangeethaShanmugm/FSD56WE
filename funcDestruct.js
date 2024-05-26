const studentAge = 20;
const batch = "FSD56WE";
const mark = 90;

const student = {
    studentName: "Deepika",
    studentAge,
    batch,
    score: mark,
};

console.log(student);

//function destructuring

//Deepika has got 90 and she belong to FSD56WE batch

function printDetails(student) {
    return (
        student.studentName +
        " has got " +
        student.score +
        " and she belong to " +
        student.batch +
        " batch "
    );
}

console.log(printDetails(student));

//destructuring

function printDetails1(student) {
    const { studentName, score, batch } = student;
    return (
        studentName +
        " has got " +
        score +
        " and she belong to " +
        batch +
        " batch "
    );
}

console.log(printDetails1(student));

//destruct in argument itself

function printDetails2({ studentName, score, batch }) {
    // const { studentName, score, batch } = student
    return (
        studentName +
        " has got " +
        score +
        " and she belong to " +
        batch +
        " batch "
    );
}

console.log(printDetails2(student));

//Template literals  => `` => Backtick +  ${}=> interpolation  => substitute value

function printDetails3({ studentName, score, batch }) {
    return `${studentName} has got ${score} and she belong to ${batch} batch`;
}

console.log(printDetails3(student));

//arrow function +  Template literals  +  destructuring   => Es6

const printDetails4 = ({ studentName, score, batch }) => `${studentName} has got ${score} and she belong to ${batch} batch`;

console.log(printDetails4(student));
