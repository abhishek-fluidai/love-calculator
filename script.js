

function Result(){
let a = document.getElementById("name").value;
let b = document.getElementById("lname").value;
if(a == ""  ){
alert("Enter Your Name please! ");
}   else if(!isNaN(a)){
alert("Enter Text only!");
}   else if(a.length <=1){
alert("Please Enter at Least 2 latters!");
}   else if(b == ""){
alert("Enter your Hmm's name!");
}   else if(!isNaN(b)){
alert("Please Enter Text only!");
}  else if(b.length <=1){
alert("Please Enter at Least 2 latters!");
} else {
let lovedata = Math.random() *100 ;
lovedata = Math.floor(lovedata);
document.getElementById("res").innerHTML = `${lovedata }%`;
// document.getElementById("lname").value = "";

}
}
