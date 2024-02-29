// //Task 30
// // Hello admin: Make a array of five or more username, uncluding the name 'admin'. imagine you are writing code that will print
// // a greeting to each user after they log in to a website .loco through the array , and print a greeting to each user:
// // . if the username is 'admin', print a special greeting , such as hello admin , would you like to see a status report?
// //. otherwise , print a generic greeting, such as Hello Eric , thank you for logging in again.
// // let users : string [] = ["eric","haseeb", "ali","fatima","admin"]
// // for(let user of users) {
// //     if(user ==="admin") {
// //       console.log("hello admin, would you like to see a status report?")
// //     }else{
// //         console.log("Hello $(user),thank you for logging in again")
// //     }
// // }
// // Tassk 31
// // no users:add an if test to exericse 28 to make sure the list of users is not empty.
// //. if the list is empty, print the message we need to find some users!
// //. remove all of the usernames from your array, and mke sure the correct message is printed.
// let usrs: string [] = ["eric","haseeb", "ali","fatima","admin"]
// if (usrs.length === 0){
//     console.log("we need to find some users!")
// }else{
//     for(let user of usrs){
//         if (user === "admin") {
//             console.log("Hello admin. would you like to see a status report?")
//         }else{
//             console.log("Hello $(user), thank you for logging in again")
//         }
//     }
// }
// usrs = []
//     if(usrs.length === 0){
//         console.log("we need to find some users!")
//     }
//Task 32
// checking username: do the following to create a program that simulates how websites ensure that everyone has a unique username.
//. make a list of five or more usernames called current_users,
//.make anotheer list of five usrsnames called new_users. make sure  one or two of the new  usernames are also in the current_users
//. loop through the new_usrs list to see if each new users name has already been used .if it has , print a message that the person
// will need to enter a new username. if a usernames .if a username has been used , print a message saying that the username is available.
var current_users = ["admin", "Erik", "Ali", "Hamza", "Fatina"];
var new_users = ["Admin", "Fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
