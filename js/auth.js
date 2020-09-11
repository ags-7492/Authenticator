var attempt=3

function validate(){
	var username = document.getElementById('usr').value;
	var password = document.getElementById('pwd').value;
// authenticate
	if (username=='LOL123' && password=='aurbatao') {
		alert('login succesfully');
		window.location = "success.html";
		return false;
	}

	else{
		attempt--
		alert('Only '+ attempt +' attempts left')
		if (attempt==0){
			document.getElementById('usr').disabled =true;
			document.getElementById('pwd').disabled =true;
			document.getElementById('submit').disabled =true;
			return false;
		}
	}

}