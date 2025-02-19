//  arrays.js
const steps = ["one", "two", "three"];
const letters = ["A", "B", "C"];
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const numbers = [12, 34, 21, 54]

function listTemplate(step)
{
    return `<li>${step}</li>`;
}

function convertLetterToGPA(letter)
{
    let GPA = 0

    if (letter == "A")
    {
        GPA = 4;
    }

    else if (letter == "B")
    {
        GPA = 3;
    }

    else if (letter == "C")
        {
            GPA = 2;
        }

    return GPA;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const GPAPoints = letters.map(convertLetterToGPA);
const GPA = GPAPoints.reduce((total, item) => total + item) / GPAPoints.length;

const shortFruit = fruits.filter((word) => word.length < 6);

const luckyNumber = 21;
let luckyNumberIndex = numbers.indexOf(luckyNumber);