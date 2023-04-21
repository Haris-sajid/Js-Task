
// Task 02 

// var family=prompt("How many persons are you ?");

// var qty=prompt(" Enter Your Value in Numbers : Wheat Rs 320/- Barley Rs 800/- Dates Rs 1000/- Raisins Rs 2000/- ?")

// if(qty==320){
//     console.log("Your Wheat Fitrana is :" + family*qty);
// }
//  else if(qty>=800){
//     console.log("Your Barley Fitrana is :" + family*qty);
// }
// else if(qty>=1000){
//     console.log("Your Dates Fitrana is :" + famil*qty);
// }
// else if(qty>=2000){
//     console.log("Your Raisins Fitrana is :" + family*qty);
// }
// else{
//     console.log("Enter the correct value");
// }

// Task No 3

// var sn=8;
// var guess=prompt("Guess The Number");
// if(guess==sn){
//     console.log("Congratulations!");
// } else{
//     console.log("Try Again");
// }


// Task No 4
// var nam=prompt("Please Enter Your Name:");
// var captilize_nam=nam.charAt(0).toUpperCase() + nam.slice(1);
// console.log("Your Name is: " + captilize_nam);


// Task 5:

// In this task, you will be creating two empty arrays called "contactNumbers" and "contactNames". Using the prompt, you will ask the user to enter a contact number and contact name. You will then push these values into their respective arrays using the push method. After adding all the contacts, you will display the contact numbers and names in the console. To do this, you will need to use a for loop to iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// var contactNames=[];
// var contactNumbers=[];

// for(i=0; i<3; i++){
//   var  contactName=prompt("Enter Your Cotact Name");
//    var contactNumber=prompt("Enter Your Contact Number");
//     contactNames.push(contactName);
//     contactNumbers.push(contactNumber);

// }
// console.log("Contact Names:");
// for (let i = 0; i < contactNames.length; i++) {
//    }

//    console.log("Contact Number:"); 
// for( i=0; i < contactNumbers.length; i++ ){
//     console.log(contactNumbers[i])
// }


// Task No 10 

// var nationality = prompt('Please Your Nationality ?');
// var gender = prompt("Please Enter your Gender");
// var age = prompt("Please Enter your Age");

// if (nationality.toLowerCase() == 'pakistani' && gender == "male" && age >= 18) {
//     alert('Go to the voting Room')    
// }
// else if (gender === "female" && age >= 18) {
//     var married = prompt("Are you married? (yes or no)");
//     if(married === "yes"){
//         alert("Go to the voting Room");
//     }
//     else {
//         alert("You're not eligible.");    
//     }
// }
// else {
//     alert("You're not eligible")
// }

// Task No 6

// var products=['Apple','Bananna','Peach','Mango','Pineapple'];
// var ask=prompt("Choose Your Favroit Fruits : Apple, Bananna,Peach, Mango, Pineapple ?");
// var remove=products.splice(ask)[0];
// console.log("Remove Products ?" + remove);
// console.log("Remaining Products ?" + products );
// console.log("Your Add to Cart item is " + remove);

// Task No 8 

// var pk_Team= ['Sarfarz Ahmed', 'Fawad Alam', 'Shan Masood', 'Faheem Ashraf', 'Roman Raees', 'Shadab', 'Iftikhar Ahmed', 'Nawaz', 'Amir', 'Saim Ayub', 'Naseem Shah', 'Rizwan', 'Imad Wasim', 'M Haris', 'Junaid Khan'];
// var pk_Best= ['Sarfarz Ahmed', 'Fawad Alam', 'Shan Masood', 'Faheem Ashraf', 'Roman Raees', 'Shadab', 'Iftikhar Ahmed', 'Nawaz', 'Amir', 'Saim Ayub'];

// console.log("Pakistani Squad For Pak  India Match  " + pk_Team);   
// console.log("Pakistani Squad For India Tour  " + pk_Best);   