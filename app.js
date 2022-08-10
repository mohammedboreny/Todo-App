let Name=prompt("Enter your name");
let gender="";
gender = prompt("Enter your gender");
if (gender != "Male" && gender != "Female")
alert("please provide your gender as male or female");


age=prompt("Enter your age")
if (age <= 0) 
alert("Age is less than 0");
    
y = confirm("Do you want to continue?")
if (y == true) {
    if (gender == "Male")
        alert("Welcome Mr" + Name);
    else
        alert("Welcome Ms" + Name);
}

