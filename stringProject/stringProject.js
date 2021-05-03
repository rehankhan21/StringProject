/*  
    Register the user if they do have a log in 
    encrypt the password atfer being registered.
    loop the replace string function on the password to encrpyt

    uncrpyt when they try to log in ??? maybe

*/

let userName = window.prompt("Register UserName");
let password = window.prompt("Register Password");
let encrpytedPass = "";

let trimName = userName.trim().toLowerCase();
let trimPassword = password.trim().toLowerCase();

let encrypt = e => {
    // e.preventDefault();
    // alert("form works")

    /* let password = window.prompt("Enter Password");
    let userName = window.prompt("Enter UserName"); */

    let randomSymbols = ['!', '@', '#', '$']
    //let newPass = "";
    let testValue = "";

    for (let i = 0; i < password.length; i++) {

        let temp = randomSymbols[Math.floor(Math.random(4) * randomSymbols.length)]

        testValue += temp;
        //encrpytedPass += temp;

        //newPass +=  password.replace(password[i], temp);
    }
    
    return testValue;
}

console.log(encrpytedPass)

function login() {

    let userInput = window.prompt("Enter your username").toLowerCase()
    let passInput = window.prompt("Enter you password").toLowerCase()

    if (userInput == "" || passInput == "") {
        alert("No user found");
    }

    if (trimName == userInput && trimPassword == passInput) {
        alert("you are loggined in");

        /*  
           if  prompt works in webpage
    
            verify email address. then input verification code???
    
            loop a list of items, add buttons thats add items too cart. 
            put the list of items in an array then loop through the array.
            to print all the items.
    
            if(Cart is not empty){
                go to cart for checkout
            }
    
            in cart 
    
            if(user is not verified cannot proceed to checkout)
            else(){
                go to checkout, output you have been checked out!!!!
            }
        */
    }
    else if (trimName != userInput && trimPassword == passInput) {
        alert(userInput
            .padEnd(userInput.length + 1, " ")
            .concat("This is not the correct Username"))

    }
    else if (trimName == userInput && trimPassword != passInput) {
        alert((
            passInput
                .padEnd(passInput.length + 1, " ")
                .concat("This is not the correct Password")
                .replace(passInput, "*****")))
    }
    else {
        alert(
            userInput
                .padEnd(userInput.length + 1, " ")
                .concat(passInput)
                .padEnd(passInput.length + 1, " ")
                .concat(" are both wrong"));
    }
}
