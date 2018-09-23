

(function(){
	emailjs.init("user_l660vN5g7aBh7b3cDvlOy");
})();
	   
function sendEmails(){
	var emailId =	document.getElementById("emailId").value;
	var sysiz =	document.getElementById("syssize").value;
	var	noofsolarpanel = document.getElementById("noofsolarpanels").value;
	var	are = document.getElementById("area").value;
	var totsyscos = document.getElementById("totsyscost").value;
	var	uticos = document.getElementById("uticost").value;
	var	totsavin = document.getElementById("totsaving").value;
		   
	emailjs.send("gmail", "template_LrBpUKiF", {"emailId":emailId,"sysiz":sysiz,"noofsolarpanel":noofsolarpanel,"are":are,"totsyscos":totsyscos,"uticos":uticos,"totsavin":totsavin})	 	       
	.then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
	}, function(error) {
		 console.log('FAILED...', error);
	});	   
}