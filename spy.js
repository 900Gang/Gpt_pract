// var firstName=prompt("Enter your first name")
// var lastName=prompt("Enter your last name")
// var age=prompt("Enter your age")
// var height=prompt("Enter your height")
// var petName=prompt("Enter you pet name")



// var nameF=false 
// var agel=false
// var petn=false
// var he=false


// if (firstName[0]===lastName[0]){
//     namef=true;

// }else{
//     namef=false;

// }



// if (age>20 && age < 30){
//     agel=true;

// }else{
//     {
//     agel=false;

// }
// }

// if (petName[petName.length-1]==='y'){
//     petn=true;

// }else{
//     petn=false;

// }

// if (height >=170){
//     he=true;

// }else{
//     he=false;

// }

// if(namef && agel && he && petn){
//     console.log("Hi there");
// }else{
//     console.log("Nothing to see here")
// }
// function caught_speeding(speed, is_birthday){
//   //Code Goes Here
//   if((speed<=60 && !is_birthday) || (speed<=65 && is_birthday)){
//     return 0

//   }else if ((speed>=61 &&speed<=80 && !is_birthday) || (speed>=66 &&speed<=85 && is_birthday)){
//     return 1
//   }else {
//     return 2
//   }
// }




// var rome=[]
// var start=prompt("Do you want to start Y/N")
// while (true){
//   if (start ==="Y"){
//     var action=prompt("Select action add,display,remove or quit");
//     if(action==="add"){
//       var enter=prompt("enter the value");
//       rome.push(enter);

//     }
//     if(action==="display"){
//       console.log(rome);
//     }

//     if (action==="remove"){
//       console("removed item is" + rome.pop());
//     }

//     if(action==="quit"){
//       break;
//     }





//   }else if(start==="N"){
//     console.log("Ok Get out")
//     break

//   }else{
//     alert("Wrong Choice")
//     break
//   }
// }




// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength:function(){
    console.log(this.name.length);


  }
};

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  alertF:function(){
    alert("Name is "+this.name +",Job is "+ this.job +",Age is "+ this.age)
  }
};

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName:function(){
    var a=this.name.split(" ");
    console.log(a[1]);
  }
};

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
