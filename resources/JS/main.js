if (typeof (CV) == "undefined") {
    CV = {}
}

CV.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSomething
   	 }
	formValidation = function(){
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
		
		var mainRt = new MainRoute();
		console.log(mainRt.getRouteName());
		if(mainRt.validateForm(form,form_validator_check)){
			console.log("validation success");
			// doSomething
		}else{
			console.log("validation fail");
		}
	}
}

bootStrapJS = CV.bootStrapJSOps


