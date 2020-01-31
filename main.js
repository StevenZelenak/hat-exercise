const outputDomString = (divId, str) => {

    const assignedDiv = document.getElementById(divId);
    assignedDiv.innerHTML = str;
}

const callForm = (e) => {

    const idButton = e.target.id;
    let domString = '';

    if (idButton === 'formCallButton') {

        domString += '<div class=" border border-dark rounded mx-5">';
        domString +=    '<div class="">';
        domString +=        `<h2 class="ml-5 mt-2">Enter First Year's Name</h2>`;
        domString +=    '</div>';
        domString += '<div class="studentNameForm">';
        domString +=    '<form class="d-flex flex-row justify-content-end align-items-center my-3">';
        domString +=        '<label class="m-1 mr-3" for="studentName">Student: </label>';
        domString +=        '<input type="text" class="mx-5 border border-dark" id="studentName" placeholder=" Harry Potter">';
        domString +=        '<button type="submit" class="btn btn-outline-dark btn-sm mx-5 px-5 py-0 font-weight-bold rounded"><h5>Sort!</h5></button>';
        domString +=    '</form>';
        domString += '</div>';
        domString += '</div>';

        
    }

    outputDomString("formContainer", domString);


}

const events = () => {

    document.getElementById('formCallButton').addEventListener('click', callForm);
}

const init = () => {
    
    events();
    
}

init();