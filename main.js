//array of house names
const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

//empty array to store students
const arrStudents = [];

//pick random house form array
const randomize = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//prints form to dom
const outputDomString = (divId, str) => {

    const assignedDiv = document.getElementById(divId);
    assignedDiv.innerHTML = str;
}

//the form that gets called to the dom
const callForm = () => {
    if (document.getElementById('formContainer').className === "invisible") {
        document.getElementById('formContainer').className = 'visible';
    } else if (document.getElementById('formContainer').className === "visible") {
        document.getElementById('formContainer').className = 'invisible';
    }
}

//counter to give ids of object same ids as buttons
const studentCounter = () => {

    let number = arrStudents.length + 1;
    return number.toString();

}

//grabs value from the form and puts it onto the card
const createStudent = () => {
    let objvalue = document.getElementById('studentName').value;
    arrStudents.push({
        id: studentCounter(),
        name: objvalue,
        house: randomize(houseNames)
    });
    
    
    printCard(arrStudents);
    console.log(arrStudents);
}

//prints card to the dom
const printCard = (arr) => {

    
    
    let domString = '';
    for (let index = 0; index < arr.length; index++) {
        domString += '<div class="col-sm-12 col-md-6 col-lg-4 my-3">';
        domString += '<div class="card-body border border-dark rounded text-center mx-2">';
        domString += `<h3 class="card-title">${arr[index].name}</h3>`;
        domString += `<p class="card-text">${arr[index].house}</p>`;
        domString += `<button id="${arr[index].id}" class="btn btn-outline-dark btn-sm mx-5 px-5 py-2 font-weight-bold rounded">Expel!</button>`;
        domString += '</div>';
        domString += '</div>';

    }
    outputDomString("cardCall", domString);
    clearForm();
    eventButtonLoop();
    
}

//clears the value of the form
const clearForm = () => {
    document.getElementById('studentName').value = '';
}

//creates a button with a id that is equal to every object created
const eventButtonLoop = () => {

    for (let i = 0; i < arrStudents.length; i++) {
        document.getElementById(arrStudents[i].id).addEventListener('click', expelStudent);
    }
}

//removes a object from the array
const expelStudent = (e) => {

    for (let i = 0; i < arrStudents.length; i++) {
        if (e.target.id === arrStudents[i].id) {
            arrStudents.splice(i, 1);
        }

    }

    printCard(arrStudents);

}

//where the events are stored
const events = () => {

    document.getElementById('btnSubmit').addEventListener('click', createStudent);
    document.getElementById('formCallButton').addEventListener('click', callForm);
}

//contains function that need to be initialized
const init = () => {

    events();


}

//runs the program
init();