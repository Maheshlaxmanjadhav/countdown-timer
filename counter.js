function countdown()
{
	var v1=document.getElementById("cdate").value;

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

	document.getElementById("days").textContent=d;
	document.getElementById("days").innerText=d;

	document.getElementById("hours").textContent=h;
	document.getElementById("minutes").textContent=m;
	document.getElementById("seconds").textContent=s;
	setTimeout(countdown,1000);
}