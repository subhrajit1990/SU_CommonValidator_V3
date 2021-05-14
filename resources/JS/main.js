if (typeof (CV) == "undefined") {
    CV = {}
}

CV.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSomething
   	 }
	formValidation = function(){
		// Sample request payload construction -- Starts
		var form = document.getElementsByClassName("inputType"),
		form_validator_check = {
            		lastname: {
                		verify: ["nullCheck","lastname"],
                		message: ["Please enter the last name","Please enter 4 digits last name"]
            		},
            		firstname: {
                		verify: ["nullCheck"],
                		message: ["Please enter the first name"]
            		}
        	};
		// Sample request payload construction -- Ends
		
		// Sample function call -- Starts
		var mainRt = new MainRoute();
		if(mainRt.validateForm(form,form_validator_check)){
			console.log("validation success");
			// doSomething
		}else{
			console.log("validation fail");
		}
		// Sample function call -- Ends
	}
}

bootStrapJS = CV.bootStrapJSOps


