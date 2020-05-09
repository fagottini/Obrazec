document.getElementById('datum').valueAsDate=new Date();

//ne dopusca stevil v gsmju
document.getElementById('gsm').addEventListener("keypress",function(evt) {
	if(evt.which<48 || evt.which > 57){
		evt.preventDefault();
	}
});


function setSubmited(){
	document.getElementById('obrazec').className = "submited";
}
// dodas "-" po 3eh stevilkah 
function autofill(){
	var num = document.getElementById('gsm').value;
	if(num.length==3||num.length==7){
		document.getElementById('gsm').value = num +'-';
	}
	else{
		document.getElementById('gsm').value = num;
	}
	
}
//stevnik kolko crk je v text area
function countChar(){
	var x = document.getElementById('counter').innerHTML;
	var long = (document.getElementById('txt').value).length;
	var counter = 255 - long;
	var key = event.keyCode || event.charCode;
	

	if(key == 17 || key == 16 || key == 20 || key == 9 || key == 91 || key == 18 || key == 13){
		return false;
	}
	else if(x==255 && key == 8){
		return false;
	}
	else{
		 document.getElementById('counter').innerHTML = counter;	
	}
	
}


