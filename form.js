console.log("coding")
var firstNameContainer = document.querySelector(".firstName");
var lastNameContainer = document.querySelector(".lastName");
var email = document.querySelector(".emailAddress");
var password = document.querySelector(".password");
var button = document.querySelector(".button");
var errorOne = document.querySelector(".icon-error1");
var errorTwo = document.querySelector(".icon-error2");
var errorThree = document.querySelector(".icon-error3");
var errorFour = document.querySelector("icon-error4");
var infoOne = document.querySelector(".info1");
var infoTwo = document.querySelector(".info2");
var infoThree = document.querySelector(".info3");
var infoFour = document.querySelector(".info4");


// infoOne.textContent = "Wrong";
// infoOne.style.display = "block"
// firstNameContainer.value = "First";
// lastNameContainer.value = "Last";
// email.value = "Address";

// Regular expression
// Regular expression is represented by 2 forward slash
// Anything that stays inside the 2 forward slash is a pattern

// - means to
// * means zero or more occurence
// + one or more occurrence
// / / this is used to house regex patterns
// [] this is used to house range of characters
// () this is used to group range of characters
// ^ starts from the beginning
// $ starts from the end
// {} 
// ? zero or one occurence
// \ used to escape regex symbols, i.e it transforms all these symbol back to their natural english or arithmetic behaviour. The \ must come before all regex symbols for the escape to work.
// | this means OR
// \s means white space

// This is successful when users enter letters that are >= 3. Every other character shows an error 
firstNameContainer.addEventListener("keyup", ()=> {
    if (firstNameContainer.value.length < 3 || 
        firstNameContainer.value.match(/[!-@]|[\[-`]|[{-~]/) ||
        firstNameContainer.value.match(/\s/)
    ){
        infoOne.style.display = "block";
    }
    else if (firstNameContainer.value.length >= 3){
        infoOne.style.display = "none";
    } 
});

// This is successful when users enter letters that are >= 3. Every other character shows an error 
lastNameContainer.addEventListener("keyup", ()=> {
    if (lastNameContainer.value.length < 3 ||
        lastNameContainer.value.match(/[!-@]|[\[-`]|[{-~]/) ||
        lastNameContainer.value.match(/\s/)
    ){
        infoTwo.style.display = "block";
    }
    else if (lastNameContainer.value.length >= 3){
        infoTwo.style.display = "none";
    }
});

// This only validate numbers for users password. Every other character shows an error 
password.addEventListener("keyup", ()=> {
    if (password.value.length < 8 ||
        password.value.match(/[!-\/]|[:-~]/) ||
        password.value.match(/\s/)
    ){
        infoFour.style.display = "block";
    }
    else if (password.value.length >=8){
        infoFour.style.display = "none";
    }
})

email.addEventListener("keyup", ()=> {
    if (email.value.length < 3 ||
        // email.value.match(/[!-\-]|[:-\?]|[\[-`]]|[\{-~]|\//) ||
        email.value.match(/\s/) 
        // ||
        // !email.value.match(/[a-zA-Z][0-9]*@gmail.com/)
    ){
        infoThree.style.display = "block";
    }
    else if (email.value.length >=3 
        // &&
        // email.value.match(/[a-zA-Z][0-9]*@gmail.com/) 
        // &&
        // !email.value.match(/\s/) 
    ){
        infoThree.style.display = "none";
    }
   
})

// red@gmail.com