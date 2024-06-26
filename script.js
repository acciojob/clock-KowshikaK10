//your JS code here. If required.
let time=document.getElementById('timer');

function clock(){
	let dateData=new Date();
	let date=dateData.getDate();
	let month=dateData.getMonth();
	let year=dateData.getFullYear();
	//time
	let hour=dateData.getHours();
	let min=dateData.getMinutes();
	let sec=dateData.getSeconds();
	let ampm;	
	(hour>12) ? ampm='PM' : ampm='AM';
	hour=(hour>12) ? hour-12 : hour;
	time.innerHTML=`${date}/${month}/${year}, ${hour}:${min}:${sec} ${ampm}`
}
clock();