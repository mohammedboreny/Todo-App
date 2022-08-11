let Name=prompt("Enter your name");
let gender="";
gender = prompt("Enter your gender");
if (gender != "Male" && gender != "Female") {
    alert("please provide your gender as male or female");
}
else {
    age = prompt("Enter your age")
    if (age <= 0) {
        alert("Age is less than 0");
    }
    else {
        y = confirm("Do you want to continue?");
        if (y == true) {
            if (gender == "Male")
                alert("Welcome Mr" + Name);
        }
        else {
            alert("Welcome Ms" + Name);
        }
    }
    car = prompt("Do you have a car?");
    if (car ==null) {
        car = "invalid";
    }
    married = prompt("are you married?");
    if (married ==null) {
        married = "invalid";
    }
    children = prompt("Do you have a children?");
    if (children ==null) {
        children = "invalid";
    }
    let listOfAnswers = [];
    listOfAnswers.push(Name);
    listOfAnswers.push(gender);
    listOfAnswers.push(age);
    listOfAnswers.push(car);
    listOfAnswers.push(married);
    listOfAnswers.push(children);
    listOfAnswersRev = listOfAnswers.reverse();
    console.log(listOfAnswersRev);
    ratingUser = prompt("rate our website");
    for (i = 1; i <= ratingUser; i++){
        let x = '';
        x += "*";
        if (x.length >= 4)
            x = "*****";
    }
    alert("thank you for " + x + "stars");
    }
    

