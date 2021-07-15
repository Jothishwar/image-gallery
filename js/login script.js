
function toggle(){
	var password=document.querySelector('[id=pass]');

	if (password.getAttribute('type')==='password'){
		password.setAttribute('type','text');
		document.getElementById("font").style.
		color='#696969';
	}
	else{
		password.setAttribute('type', 'password');
		document.getElementById("font").style.
		color='white';	
	}
}
/*
function login() 
{
	var username=document.getElementById('uname').value;
	var password=document.getElementById('pass').value;
	
	for (var i = 0; i < users.length; i++) 
	{
		if (username==users[i].username && password==users[i].password) {
			console.log("logged in")
			return
		}
	}
}
*/
function login() {
	var username=document.getElementById('uname').value;
	var password=document.getElementById('pass').value;
	var i;
	var pass_index;
	for (i=0; i < JSON.parse(localStorage.getItem('uname')).length; i++) {
		//console.log(JSON.parse(localStorage.getItem('uname'))[i]);
		if (JSON.parse(localStorage.getItem('uname'))[i] == username) {
			pass_index=i;
			console.log("crct username");
			break;
		}
		else{
			pass_index=undefined;
		}
	}
	if (pass_index==undefined) {
		console.log("wrong username");
		alert("Username doesn't exist.  Try again");
	}
	else{
		if (JSON.parse(localStorage.getItem('pass'))[pass_index] == password) {
			console.log("logged in");
			document.location.href = "C:/Users/Lenovo/Desktop/snaps-2nd edit/index.html";
			alert("Succesfully Logged in :-)");
		}
		else{
			console.log("Wrong password");
			alert("Wrong password");
		}
	}
}