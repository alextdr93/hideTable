"use strict";
const table = document.querySelector('#user_table');
const user_form = document.querySelector('#user-form');
const mainContainner = document.querySelector('.container');
const btn_toggle = document.querySelector('#btn_toggle_table');

class TableNotFoundError extends Error {

    constructor(message) {
        super(message);

    }
}

const toggleElementDisplayHandler = function () {
    const element = this.element.parentElement;
    const formParent = user_form.parentElement;
    const btn = this.btn;
    let display = element.style.display;

    if (!display || display !== 'none') {
        element.style.display = 'none';
        formParent.classList.replace('col-md-6', 'col-md-12')
        btn.innerText = 'Show table'
    } else {
        element.style.display = 'block';
        formParent.classList.replace('col-md-12', 'col-md-6')
        btn.innerText = 'Hide Table'
    }
}
const obj = {
    btn: btn_toggle,
    element: table
}
btn_toggle.addEventListener('click', toggleElementDisplayHandler.bind(obj));
const Person = function (fName, lName, age, description) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.description = description;
}

Person.prototype.fullName = function () {
    return `${this.fName} ${this.lName}`;
}

Person.prototype.addToTable = function () {
    const table = document.querySelector('#user_table');
    if (!table) {
        const msg = `Cannot save ${this.fullName()}`
        throw new TableNotFoundError(msg)
    }
    const tBody = table.querySelector('tbody');
    const rows = table.querySelector('tr');
    const tr = document.createElement('tr')
    tBody.appendChild(tr);

    const no = document.createElement('td');
    no.innerText = (rows.length + 1).toString();
    const fNameCol = document.createElement('td');
    fNameCol.innerText = this.fName;
    const lNameCol = document.createElement('td');
    lNameCol.innerText = this.lName;
    const ageCol = document.createElement('td');
    ageCol.innerText = this.age;
    const descriptionCol = document.createElement('td');
    descriptionCol.innerText = this.description ? this.description : 'Not Defined';
    tr.append(no, fNameCol, lNameCol, ageCol, descriptionCol);
}
const formSubmitEventHandler = function(e) {
    e.preventDefault();
    try {
        const elements = this.elements;
        const fName = elements.fName.value;
        const lName = elements.lName.value;
        const age = elements.age.value;
        if (age < 18) {
            alert("You're underage");
            return;
        }
        const description = elements.description.value;
        const savedPerson = new Person(fName, lName, age, description);

        console.log(savedPerson);
        savedPerson.addToTable();
    }catch (err){
    const h1 = document.createElement('h1');
    h1.innerText=err.message;
    h1.classList.add('text-danger')
    mainContainner.appendChild(h1)
    }
}
const formResetEventHandler = (e)=>{
    if(!confirm(`Are you sure to reset this form???`)){
        e.preventDefault();
    }
}

user_form.addEventListener('submit',formSubmitEventHandler);
user_form.addEventListener('reset',formResetEventHandler);