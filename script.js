/*LIGHT/DARK MODE */

var mode = document.getElementById("color");
var color = document.getElementById("dark");


mode.onclick = function(){
	if(color.classname == "off"){
		color.setAttribute("href","light.css");
		color.classname = "on";
		mode.getElementsByTagName("a")[0].innerHTML = "Display : LIGHT";
	}

	else{
		color.setAttribute("href","");
		color.classname = "off";
		mode.getElementsByTagName("a")[0].innerHTML = "Display : DARK";
	}
}

/* --------------------------------------------------------------------------------------------------------------------- */

/* jumbling numbers */

function shuffle(arra1) {
    var ctr = arra1.length;
    var temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

var arra1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var myArray = shuffle(arra1);

/* assigning values to grid */

var k=0;
var i,j;
for(i=1;i<=4;i++)
	for(j=1;j<=5;j++){
		document.getElementById(10*i+j).innerHTML = myArray[k];
		document.getElementById(10*i+j).className = "a" + myArray[k].toString();
		k++;
	}


/* --------------------------------------------------------------------------------------------------------------------- */

/* On Click Events */

function Recurse(p){
	now = new Date().getTime();
	if(p<20){
		document.getElementsByClassName("a" + (p+1).toString())[0].innerHTML = p+21;
		document.getElementsByClassName("a" + (p+1).toString())[0].classList.add("a" + (p+21).toString());
	}
	else{
		document.getElementsByClassName("a" + (p+1).toString())[0].classList.add("Erase");
	}
	document.getElementsByClassName("a" + (p+1).toString())[0].classList.remove("a" + (p+1).toString());

	document.getElementById("Time").innerHTML = ((now - startTime)/1000).toPrecision(3).toString();

	p++;
	if(p<40)
		document.getElementsByClassName("a" + (p+1).toString())[0].onclick = function(){
		Recurse(p);
		}
	if(p==40){ 
		endTime = new Date(now);
		alert((endTime - startTime)/1000);
	}
}


var startTime = 0;
var now = 0;
var endTime = 0;

m=0;
document.getElementsByClassName("a" + (m+1).toString())[0].onclick = function(){
	if(m==0) {
		startTime = new Date().getTime();
		Recurse(m);
	}

}




