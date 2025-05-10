function getGrades(inputSelector)
{
    let grades = document.querySelector(inputSelector).value;
    let gradesArray = grades.split(",");
    let capitalArray = gradesArray.map((grade) => grade.trim().toUpperCase());
    return capitalArray;
}

function convertGrades(grade) 
{
    let gp = 0;


    if (grade === "A")
    {
        gp = 4;
    }

    else if (grade === "B")
    {
        gp = 3;
    }

    else if (grade === "C")
    {
        gp = 2;
    }

    else if (grade === "D")
    {
        gp = 1;
    }
    
    else if (grade === "F")
    {
        gp = 0;
    }

    return gp;
}

function calculateGpa(grades)
{
    let gradePoints = grades.map((grade) => convertGrades(grade));
    let gpa = gradePoints.reduce((total, item) => total + item) / gradePoints.length;
    return gpa.toFixed(2);
}

function displayGpa(gpa, selector)
{
    document.querySelector(selector).innerText = gpa;
}

function clickHandler()
{
    let grades = getGrades("#grades");
    let gpa = calculateGpa(grades);
    displayGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);