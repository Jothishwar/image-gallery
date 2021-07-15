//function for view password button 
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
//function for creating a new acc
function signin() {
	var name=document.getElementById('name').value;
	var email=document.getElementById('email').value;
	var ph_no=document.getElementById('phno').value;
	var username=document.getElementById('uname').value;
	var password=document.getElementById('pass').value;
	var c_pass=document.getElementById('pass1').value;
	if (localStorage.getItem('name')== null) {
		localStorage.setItem('name','[]');
	}
	if (localStorage.getItem('email')== null) {
		localStorage.setItem('email','[]');
	}
	if (localStorage.getItem('phno')== null) {
		localStorage.setItem('phno','[]');
	}
	if (localStorage.getItem('uname')== null) {
		localStorage.setItem('uname','[]');
	}
	if (localStorage.getItem('pass')== null) {
		localStorage.setItem('pass','[]');
	}
	if (password==c_pass) {
		var n_data=JSON.parse(localStorage.getItem('name'));
		n_data.push(name);
		localStorage.setItem('name',JSON.stringify(n_data));

		var email_data=JSON.parse(localStorage.getItem('email'));
		email_data.push(email);
		localStorage.setItem('email',JSON.stringify(email_data));

		var phno_data=JSON.parse(localStorage.getItem('phno'));
		phno_data.push(ph_no);
		localStorage.setItem('phno',JSON.stringify(phno_data));

		var u_data=JSON.parse(localStorage.getItem('uname'));
		u_data.push(username);
		localStorage.setItem('uname',JSON.stringify(u_data));

		var pass_data=JSON.parse(localStorage.getItem('pass'));
		pass_data.push(password);
		localStorage.setItem('pass',JSON.stringify(pass_data));
		alert("Account Created :-)");
		document.location.href="login page.html";
	}
	else{
		alert("password and confirm password do not match");
	}
}
/*
let datas=[];
const adduser = (ev)=>{
	ev.preventDefault();
	var ch=document.getElementById('pass').value;
	var ch1=document.getElementById('pass1').value;
	if (ch==ch1) {
		let data={
			name : document.getElementById('name').value,
			email_id : document.getElementById('email').value,
			phno : document.getElementById('phno').value,
			username : document.getElementById('uname').value,
			pass : document.getElementById('pass').value
		};
		datas.push(data);
		console.warn('added' , {datas} );
		//document.form[0].reset();
		//localStorage.setItem('datas','[]');
		localStorage.setItem('userdata', JSON.stringify(datas) );
	}
	else{
		alert('password and confirm password do not match');
	}
}
document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', adduser);
        });
*/