/**
 * 
 */
 function validatePass(){
	 var passWord = document.getElementById('password').value;
	 var passRegCode = new RegExp(/(?=.{8,})/);
	 var passResult = passRegCode.test(passWord);
	 if(passResult == false){
		alert("Password must be at least 8 characters in length.");
		return false;
	 }
	 
	 return true;
 }
 const subSet = new Set([
	 
	 'Barbel-class',
	 'Skipjack-class',
	 'Permit-class',
	 'Sturgeon-class',
	 'Narwhal-class',
	 'Los Angeles-class',
	 'Seawolf-class',
	 'George Washington-class',
	 'Ohio-class',
	 'Kilo-class',
	 'Alfa-class',
	 'Mike-class',
	 'Akula-class',
	 'Typhoon-class',
 	
 	]);
 
 function thankYou(){
	 if(validatePass()==true){
	 	alert("Thank you so much for becoming a part of our community!");
 	}
 }