// const user = prompt("What is your name?");
// let age = prompt("How old are you?");
// let gender = prompt("Male / Female?");
// age = parseInt(age);

// let nameOutput = document.getElementById("nameOutput");
// let ageOutput = document.getElementById("ageOutput");
// let genderOutput = document.getElementById("genderOutput");

// if (gender == "male") {
//     gender = 100;
// } else if (gender == "female") {
//     gender = 101;
// }

// nameOutput.innerHTML = user;
// ageOutput.innerHTML = age;
// genderOutput.innerHTML = gender;

// user = prompt("what's your name again?");

// let fruit = prompt("Enter a fruit:");

// let count = 1;
// let out = "";

// switch (count) {
//     case 1:
//         out += 1;
//         count ++;
//         console.log(out);
//         // break;
//     case 2:
//         out += 2;
//         count ++;
//         console.log(out);
//         // break;
//     case 3:
//         out += 3;
//         count ++;
//         console.log(out);
//         // break;
//     case 4:
//         out += 4;
//         count ++;
//         console.log(out);
//         // break;
//     case 5:
//         out += 5;
//         count ++;
//         console.log(out);
//         // break;
//     case 6:
//         out += 6;
//         count ++;
//         console.log(out);
//         // break;
//     case 7:
//         out += 7;
//         count ++;
//         console.log(out);
//         // break;
//     case 8:
//         out += 8;
//         count ++;
//         console.log(out);
//         // break;
//     case 9:
//         out += 9;
//         count ++;
//         console.log(out);
//         // break;
//     case 10:
//         out += 10;
//         count ++;
//         console.log(out);
//         // break;
//     default:
//         alert("Done!");
//         break;
// }


// let count1 = 1;
// let out1 = "";

// switch (count1) {
//     case 1:
//         out1 += 1;
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 2:
//         out1 += 2;
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 3:
//         out1 += 3;
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 4:
//         out1 += 4;
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 5:
//         out1 += 5;
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 6:
//         out1 = out.slice(0, 4);
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 7:
//         out1 = out.slice(0, 3);
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 8:
//         out1 = out.slice(0, 2);
//         count1 ++;
//         console.log(out1);
//         // break;
//     case 9:
//         out1 = out.slice(0, 1);
//         count1 ++;
//         console.log(out1);
//         // break;

//     default:
//         break;
// }

/*DOING THE CLASSWORK WITH LOOP*/
// This is for the first one...
// let count = 0;
// let num = "";
// let add = 1;

// while (count < 10) {
//     count ++;
//     num += add;
//     add ++;
//     console.log(num);
// }

// // This is for the second one...
// let count1 = 0;
// let num1 = "";
// let control = 0;

// while (count1 < 10) {
//     if (count1 < 5) {
//         count1 ++;
//         control ++;
//         num1 += control;
//         console.log(num1);
//     } else if (count1 >=5 && count1 < 10) {
//         count1 ++;
//         control=num.
//         num = num.slice(0, control);
//         control --;
//         console.log(num);
//     }
// }


// let count = 0;
// let num = '';

// while (count < 10) {
//     count ++;
//     num += count;
//     console.log(num);
// }


// let count = 0;
// let num = '';
// let control = 1;

// while (count < 10) {
//     if (count < 5) {
//         count ++;
//         num += count;
//         control ++;
//         console.log(num);
//     } else {
//         count ++;
//         num = num.slice(0, control - 1);
//         control --;
//         console.log(num);
//     }
// }


// do {
//     num = 1;
//     console.log(num);
//     num ++;
//     count ++;
// } while (count < 10);


// let conf = () => {
//     let con = confirm("Are you good?");
//     if (con) {
//         alert("Awesome");
//     }else{
//         alert("Opps! Try again");
//         conf();
//     }
// }

// let trying = (x, y) => x + y > 10 ? console.log("Greater than 10") : console.log("Lesser than 10");;

// // conf();
// // trying(5, 4);

// let vehicle = {
//     name: "Volkswgen",
//     acceleration: 218,
//     unit: "km/s",
//     brake: 21,
//     nitro: false
// }

// let users = [
//     {
//         id: 1,
//         username: "johnpaul",
//         password: "password123",
//         email: "john@email.com",
//         age: 32,
//         gender: "male",
//         rename: function rename(newName) {
//             this.username = newName;
//         },
//         schools: {
//             primary: "AMD",
//             Secondary: "PWG",
//             tertiary: "NIP"
//         }
//     },
//     {
//         id: 2,
//         username: "Peter",
//         password: "Peter123",
//         email: "peter@email.com",
//         age: 31,
//         gender: "female",
//         rename: function rename(newName) {
//             this.username = newName;
//         },
//         schools: {
//             primary: "NAG",
//             Secondary: "POL",
//             tertiary: "ETF"
//         }
//     }
// ]


// for (let i = 0; i < users.length; i++) {
//     const user = users[i];

//     if (user.username == "Peter") {
//         console.log(user.id);
//         user.rename("PeterObi");
//         console.log(user.username);
//         console.log(user["schools"]["primary"]);
//     }
    
// }

let users = [
    {
        username: "Uche",
        passowrd: "Password1"
    },
    {
        username: "John",
        passowrd: "Password2"
    },
    {
        username: "Ayomide",
        passowrd: "Password3"
    },
];




function emptyField(data) {
    if (data.length > 0) {
        // There is a data in the field...
        return true;
    } else {
        // No data found in the field...
        return false;
    }
}




function lenVerify(data) {
    if (data.length >= 8 && data.length <= 13) {
        return true;
    } else {
        return "Password must be greater than 8 characters and less than 13 characters";
    }
}




function login() {
    // alert("Validate");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameerror = document.getElementById("usernameerror");
    let passworderror = document.getElementById("passworderror");

    // Trim the data...
    username = username.trim();
    password = password.trim();

    // console.log(username, password);

    // 1. empty fields
    // 2. Length
    // 3. Datatype
    // 4. Validity


    //Empty fields...
    if (emptyField(username)) {
        usernameerror.innerHTML = "";
        if (emptyField(password)) {
            passworderror.innerHTML = "";

            // Lenght Verification...
            if (lenVerify(password) == true) {
                // The password is ok...
                // Later verify the datatype...

                // Validity...
                let valid;
                for (let i = 0; i < users.length; i++) {
                    let founduser = users[i];
                    // console.log(founduser);
                    if (username === founduser.username && password === founduser.passowrd) {
                        valid = true;
                    }
                }
                if (valid){
                    window.location.href = "./welcome.html";
                }else{
                    alert("User not registered!");
                }
            } else {
                passworderror.innerHTML = lenVerify(username);
                // console.log(lenVerify(username));
            }
        } else {
            passworderror.innerHTML = "Input a password";
        }
    } else {
        // console.log("Hold it right there");
        usernameerror.innerHTML = "Input a username";
    }
}