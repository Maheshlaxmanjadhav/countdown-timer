function countdown()
{
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

	document.getElementById("days").innerHTML=d;
	document.getElementById("hours").innerHTML=h;
	document.getElementById("minutes").innerHTML=m;
	document.getElementById("seconds").innerHTML=s;
}
function callme(){
	document.getElementById("dis").style.display="block";
	setInterval(countdown,1000);}