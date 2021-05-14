import commonValidationEngine from './modules/commonValidationEngine.js'

class MainRoute{
  constructor(){
      console.log("main route");
    }
    
   validateForm(form, formValidator){
	let validateFormflag = false;
	   try{
		let validationOps = new commonValidationEngine(form,formValidator);
		validateFormflag = validationOps.commonValidationFields();
   		console.log(JSON.stringify(form) + " :: "+JSON.stringify(formValidator) + " :: "+validateFormflag);
	   }catch(err){
	   	throw new Error("Exception happened during form validation");
	   }
	return validateFormflag;
   }
 
}
window.MainRoute = MainRoute
