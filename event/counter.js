function countdown()
{
	var x=document.getElementById("ename").value;
	document.getElementById("eve").innerHTML=x+" Event Starts on";

	var v1=document.getElementById("cdate").value;
	console.log(v1);

	var time = new Date(v1).getTime();

	var today=new Date().getTime();

	var diff = time-today;

	var d = Math.floor(diff/(1000*60*60*24));
	console.log(d);

	var h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
	console.log(h);

	var m = Math.floor((diff%(1000*60*60))/(1000*60));
	console.log(m);

	var s = Math.floor((diff%(1000*60))/(1000));
	console.log(s);

	document.getElementById("days").innerHTML=d+"d";
	document.getElementById("hours").innerHTML=h+"H";
	document.getElementById("minutes").innerHTML=m+"M";
	document.getElementById("seconds").innerHTML=s+"S";
}
function callme(){
	document.getElementById("dis").style.display="block";
	document.getElementById("container").style.display="none";
	setInterval(countdown,1000);}