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
    if (car != "y" && car != "n" && car != "yes" && car != "no") {
            car = "invalid";
        }
        married = prompt("are you married?");
        if (married != "y"&& married != "n" && married != "yes" && married != "no") {
            married = "invalid";
        }
        children = prompt("Do you have a children?");
        if (children != "y" && children != "n" && children != "yes" && children != "no") {
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
        var x = [];
        for (i = 1; i <= ratingUser; i++) {   
            x.push("*");
            if (x.length > 5)
                break;
        }
    console.log(x);
   let outPutX =x.toString();
    z= outPutX.replaceAll(","," ");
        alert("thank you for stars"+ z );
    }
