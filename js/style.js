// JavaScript Document


	var c=document.getElementById("vBar");
	var cxt=c.getContext("2d");
	var grd=cxt.createLinearGradient(0,0,0,500);
	grd.addColorStop(0,"rgb(0,117,177)");
	grd.addColorStop(1,"rgb(255,255,255)");
	cxt.fillStyle=grd;
	cxt.fillRect(0,0,20,500);
	
	var c=document.getElementById("topHBar");
	var cxt=c.getContext("2d");
	var grd=cxt.createLinearGradient(0,0,959,0);
	grd.addColorStop(1,"rgb(0,117,177)");
	grd.addColorStop(0,"rgb(255,255,255)");
	cxt.fillStyle=grd;
	cxt.fillRect(0,0,959,20);
	
	var c=document.getElementById("bottomHBar");
	var cxt=c.getContext("2d");
	var grd=cxt.createLinearGradient(0,0,782,0);
	grd.addColorStop(1,"rgb(0,117,177)");
	grd.addColorStop(0,"rgb(255,255,255)");
	cxt.fillStyle=grd;
	cxt.fillRect(0,0,782,20);
