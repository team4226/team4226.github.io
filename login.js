function login(){
	var password = prompt("Please enter your team code!");
	if(password=="Albany4226"||"XE4Y7AX"||"Robotics4226"||"JoeIsLife"){
		 confirm("Password accecpted");
	}
	else{
		 confirm("Password rejected");
		 Window.close();
		 Window.open("http://team4226.github.io");
	}
	}
	
}
