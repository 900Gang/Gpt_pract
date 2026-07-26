var firstName=prompt("Enter your first name")
var lastName=prompt("Enter your last name")
var age=prompt("Enter your age")
var height=prompt("Enter your height")
var petName=prompt("Enter you pet name")



var nameF=false 
var agel=false
var petn=false
var he=false


if (firstName[0]===lastName[0]){
    namef=true;

}else{
    namef=false;

}



if (age>20 && age < 30){
    agel=true;

}else{
    {
    agel=false;

}
}

if (petName[petName.length-1]==='y'){
    petn=true;

}else{
    petn=false;

}

if (height >=170){
    he=true;

}else{
    he=false;

}

if(namef && agel && he && petn){
    console.log("Hi there");
}else{
    console.log("Nothing to see here")
}