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

//prints card to the dom
const printCard = () => {

    createStudent();
    let domString = '';
    for (let index = 0; index < arrStudents.length; index++) {
        domString += '<div class="col-4 my-3">';
        domString += '<div class="card-body border border-dark rounded text-center mx-2">';
        domString += `<h3 class="card-title">${arrStudents[index].name}</h3>`;
        domString += `<p class="card-text">${arrStudents[index].house}</p>`;
        domString += `<button id="${arrStudents[index].id}" class="btn btn-outline-dark btn-sm mx-5 px-5 py-2 font-weight-bold rounded">Expel!</button>`;
        domString += '</div>';
        domString += '</div>';
    }
    outputDomString("cardCall", domString);
    clearForm();
}

const studentCounter = (arr) =>{
    let idCounter = 0;
    idCounter = idCounter + arr.length;
    return idCounter;
}

//grabs value from the form and puts it onto the card
const createStudent = () => {
    let objvalue = document.getElementById('studentName').value;
    arrStudents.push({
        id: studentCounter(arrStudents),
        name: objvalue,
        house: randomize(houseNames)
    });
    return arrStudents;
}

//clears the value of the form
const clearForm = () => {
    document.getElementById('studentName').value = '';
}

//where the events are stored
const events = () => {

    document.getElementById('btnSubmit').addEventListener('click', printCard);
    document.getElementById('formCallButton').addEventListener('click', callForm);
}

//contains function that need to be initialized
const init = () => {

    events();


}

//runs the program
init();