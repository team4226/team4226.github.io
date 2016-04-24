function login(){
	password = prompt("Please enter your unique page code:");
	if(password=="933akY]KB5CCtY_t3!"){
		confirm("Thank you! Enjoy the stream.");
	}
	else if(password!="3akY]KB5CCtY_t3!"){
		confirm("This page is protected by a passcode!");
		window.close();
	}
	else{
		confirm("System error!");
		window.close();
	}
	}
	
}
