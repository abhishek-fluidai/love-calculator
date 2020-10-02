

function Result(){
let a = document.getElementById("name").value;
let b = document.getElementById("lname").value;
if(a == ""  ){
alert("Enter Your Name please! ");
document.getElementById("res").innerHTML = "Enter Name!";
}   else if(!isNaN(a)){
alert("Enter Text only!");
}   else if(a.length <=1){
alert("Please Enter at Least 2 letters!");
}   else if(b == ""){
alert("Enter your Hmm's name!");
document.getElementById("res").innerHTML = "Enter Name!";
}   else if(!isNaN(b)){
alert("Please Enter Text only!");
}  else if(b.length <=1){
alert("Please Enter at Least 2 letters!");
} else {
let lovedata = Math.random() *100 ;
lovedata = Math.floor(lovedata);
document.getElementById("res").innerHTML = `${lovedata }%`;
document.getElementById("result-btn").style.display = "none";
document.getElementById("clr").style.display = "block";

// document.getElementById("lname").value = "";

   }
}

function clr() {
	document.getElementById("lname").value = "";
	document.getElementById("res").innerHTML = "Name Erased!";
	document.getElementById("result-btn").style.display = "block";
document.getElementById("clr").style.display = "none";
	}
