let name = "Pedro";
let age = 30;
let isStudent = true;
let address = null;
let phone;


const country = "Canada";
const pi = 3.14159;
const isAdult = true;
const favoriteColor = null;
const hobby = undefined;


var city = "Vancouver";
var score = 100;
var isPassed = false;
var middleName = null;
var nickname;

console.log(name, age, isStudent, address, phone);
console.log(country, pi, isAdult, favoriteColor, hobby);
console.log(city, score, isPassed, middleName, nickname);



// Movies
const filmes = ["The Godfather", "A Clockwork Orange", "Pulp Fiction", "Interstellar", "Scarface"];
const lista = document.getElementById("filmes-lista");
filmes.forEach(filme => {
    const li = document.createElement("li");
    li.textContent = filme;
    lista.appendChild(li);
});

// Student Details
const Students = { Name: "Pedro", Age: 22, Skills: ["JavaScript", "HTML", "CSS"] };
const detailsDiv = document.getElementById("student-details");
detailsDiv.innerHTML = `
      <p><strong>Name:</strong> ${Students.Name}</p>
      <p><strong>Age:</strong> ${Students.Age}</p>
      <p><strong>Skills:</strong></p>
      <ul>${Students.Skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    `;

// Calculate Square
const numberInput = document.getElementById("numberInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
calculateBtn.addEventListener("click", () => {
    const num = Number(numberInput.value);
    if (isNaN(num)) resultDiv.textContent = "Please type a valid number!";
    else resultDiv.textContent = `The square of ${num} is ${num * num}`;
});

// Age Verification
const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const ageMessage = document.getElementById("ageMessage");
checkBtn.addEventListener("click", () => {
    const age = Number(ageInput.value);
    if (isNaN(age) || age < 0) {
        ageMessage.textContent = "Please, enter a valid age!";
        ageMessage.style.color = "red";
    } else if (age < 18) {
        ageMessage.textContent = "You are a minor.";
        ageMessage.style.color = "orange";
    } else if (age <= 60) {
        ageMessage.textContent = "You are an adult.";
        ageMessage.style.color = "green";
    } else {
        ageMessage.textContent = "You are a senior citizen.";
        ageMessage.style.color = "blue";
    }
});

// Background Color Changer
const button = document.getElementById("colorBtn");
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
    return color;
}
button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
});

// Contact Form
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageField = document.getElementById("messageField").value.trim();

    if (!name || !email || !messageField) {
        formMessage.textContent = "Please, Fill all the fields!";
        formMessage.style.color = "red";
        return;
    }
    if (!email.includes("@")) {
        formMessage.textContent = "Please, Enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form Sent Successfully!";
    formMessage.style.color = "green";
    form.reset();
});
