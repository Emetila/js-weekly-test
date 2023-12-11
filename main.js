// using constructor function
function Person (person_name, person_age, person_gender, person_occupation) {

// assigning the parameters values to the objects
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,
    this.occupation = person_occupation,
    
// greeting
    this.greet = function () {
        return ('Hello and Welcome to the team, glad to have you here' + '' + this.name);
    }
}

// creating the objects
const Person1 = new Person ('Mary', 24, 'female', 'Teacher');
const Person2 = new Person ('David', 26, 'male', 'Lawyer');
const Person3 = new Person ('Paul', 30, 'male', 'Banker')
const Person4 = new Person ('Samantha', 30, 'female', 'Architect')

// accessing the properties
console.log ('Hello, and welcome to the team')
console.log (Person1.name); // "Mary"
console.log (Person2.name); // "David"
console.log (Person3.name); // "Paul"
console.log (Person4.name); // "Samantha"


