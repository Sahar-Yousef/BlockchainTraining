/* TODO: 1.Display the numbers in the range 0...50 that are multiples of 5. */
console.log("");
console.log("Task 1");
for (let i = 0; i <= 50; i++) {
   if (i%5 == 0) {
      console.log(i);
   }
}



console.log("");
console.log("Task 2");
/* TODO: 2. Change the following function into arrow function. */
// function checkUser(user){
//  if(!user){
//     return console.log("No value");
//  } else{
//     return console.log(welcome)
//  }
// }

let checkUser = (user) => { if (!user){  return console.log("No value"); } else {return console.log(welcome); } }
checkUser();



console.log("");
console.log("Task 3");
/* TODO: 3. Complete the following code to get the extension of a filename. */
filename = "index.html"
console.log(filename.split('.').pop());
filename = "index.js"
console.log(filename.split('.').pop());



console.log("");
console.log("Task 4");
/* TODO: 4. Write a function that convert a given number to hours and minutes. */
function converter  (x)  { 
   var hours = Math.floor(x/60); 
   var minutes = x%60; 
   console.log(hours+":"+minutes); 
}
converter(55);



console.log("");
console.log("Task 5");
// // /* TODO: 5. Write a function that prints the most frequent element in the following array */
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random()* 5);
}
console.log(arr);

let Count = 1;
let c = 0;
for (let i=0; i<arr.length; i++){
   for (let j=i; j<arr.length; j++){
    if (arr[i] == arr[j])
    c++;
    if (Count<c){
       Count=c; 
       var element = arr[i]; 
    }
    
   }
   c=0;
}
console.log("Most frequent element in the array is: "+element) ;



console.log("");
console.log("Task 6");
/* TODO: 6. Write a function that takes a string and returns the first integer in the string. 
         If the string does not contain an integer. a message will be displayed.*/
var st = "1SAL1";
function parseFirstInt(text){
    
   for(let i=0;i<text.length;i++){
      if (text.charCodeAt(i)<58 && text.charCodeAt(i)>47) {
         console.log(text[i]);
         break;
      } 
      else {
         console.log("There is no numbers in this text!");
      }
   }

}
parseFirstInt (st);



console.log("");
console.log("Task 7");
/* TODO: 7. Write a function that takes 2 random integers and displays the message "Taibah valley"
            if the reminder of both numbers is a product of 3, "Summer training 2022" if the reminder
            is a product of 5 and both messeges otherwise. */
function Taibah_valley () {
   var x = Math.floor(Math.random()*100);
   var y = Math.floor(Math.random()*100);
   if (x % 3 == 0 && y % 3 == 0) {
      console.log("Your Numbers:"+x+", "+y+" | Taibah valley");
   }
   else if (x % 5 == 0 && y % 5 == 0) {
      console.log("Your Numbers:"+x+", "+y+" | Summer training 2022");
   }
   else {
      console.log("Your Numbers:"+x+", "+y+" | Taibah valley, Summer training 2022");
   }
   
}
Taibah_valley();



console.log("");
console.log("Task 8");
/* TODO: 8. Write a function that calculate the Age and return it. */

function getAge(BirthDate) {
   var ageTime = new Date() - new Date(BirthDate);
   console.log(Math.floor(ageTime/1000/60/60/24/365));
}
getAge('2000/6/22');


console.log("");
console.log("That's it, Have a nice day <3!");
