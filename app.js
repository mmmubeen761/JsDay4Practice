// ..............................................................  Day 4 ...............................

///////////////////////////////////////////////////       LEVEL 1                ////////////////////////////////////////

// Q No. 1)
var a = +prompt("Enter your Age: ");
a >= 18
?
alert("You are old enough to drive.")
:
alert(`You are left with ${18 - a} years to drive.`)

// Q No. 2)
var a = +prompt("Enter your age:");
if(a === 18){
    alert("We have same age")
}else{
    alert(`You are ${18-a} year older than me`)
}


// Q No. 3)
// part i)
var a = +prompt("Enter value of a:")
var b = +prompt("Enter value of b:")
if(a>b){
    alert("a is greater than b")
}else(
    alert("a is less than b")
)

// part ii)
var a = +prompt("Enter value of a:")
var b = +prompt("Enter value of b:")
a>b
?
    alert("a is greater than b")
    :
    alert("a is less than b")


// Q No. 4)
var a= +prompt("Enter a number: ")
a%2 == 0
?
alert(`${a } is a even number`)
:
alert(`${a } is a odd number `)


///////////////////////////////////////////////////       LEVEL 2               ////////////////////////////////////////

// Q No. 1)
var score = +prompt("Enter Scores");
if (score>=80 || 101<score){
    alert("Your grade is A")
}else if (score>=70 || 80<score){
    alert("Your Grade is B")
}else if (score>=60 || 70<score){
    alert("Your Grade is C")
}else if (score>=50 || 60<score){
    alert("Your Grade is D")
}else if (score>=0 || 50<score){
    alert("Your Grade is F")
}else{ alert("Sorry")}


// Q No. 2)
var a = prompt("Enter Month:")
var b = a.toLowerCase()
if(b == "september" || b == "october"  || b == "november"){
    alert("The Season is AUTUMN")
}else if(b === "december" || b == "january" ||b ==  "february"){
    alert("The Season is WINTER")
}else if(b === "march" || b == "april" || b == "may"){
    alert("The Season is SRING")
}else if(b === "june" || b == "july" || b == "august"){
    alert("The Season is SUMMER")
}else {
    alert("You Enter Wrong Spelling of Month")
}


// Q No. 3)
var x = prompt("What is the Day today?")
var y = x.toLowerCase();
if (y == "monday" || y == "tuesday" || y =="wednesday" || y =="thursday" || y =="friday"){
    alert(`${y } is a working day`)
} else if (y == "saturday" || y =="sunday"){
    alert(`${y }  is a weekend`)
}else{
    alert("You entered Wrong spellling of day")
}




///////////////////////////////////////////////////       LEVEL 3                ////////////////////////////////////////

// Q No. 1)

var month = prompt("ENter Month");
var b = month.toLowerCase();
if(b == "january" || b == "march" || b == "may" || b == "july" || b == "august" || b == "october" || b == "december"){
    alert(`${month} has 31 Days`)
}else if(b == "april" || b == "june" || b == "september" || b == "november"){
    alert(`${month} has 30 Days`)
}else if(b == "february"){
    alert(`${month} has 28 Days and 29 in leap year`)
}else{
    alert("Wrong Spelling of MOnth")
}