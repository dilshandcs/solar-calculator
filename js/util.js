(function(){
	emailjs.init("user_UEWGfWOZEHE5QNu03w5Kp");
})();
	   
function sendEmails(){
	var shindex = document.getElementById("city").selectedIndex;
	var sh = document.getElementById("city").options[shindex].text;
	var utindex = document.getElementById("utility").selectedIndex;
	var ut = document.getElementById("utility").options[utindex].text;
	var ub = parseFloat(document.getElementById("utilityBill").value);
	var emailId =	document.getElementById("emailId").value;
	var sysiz =	document.getElementById("syssize").value;
	var	noofsolarpanel = document.getElementById("noofsolarpanels").value;
	var	are = document.getElementById("area").value;
	var totsyscos = document.getElementById("totsyscost").value;
	var	uticos = document.getElementById("uticost").value;
	var	totsavin = document.getElementById("totsaving").value;
		   
	emailjs.send("gmail", "template_hatLVtq1", {"emailId":emailId,"sh":sh,"ut":ut,"ub":ub,"sysiz":sysiz,"noofsolarpanel":noofsolarpanel,"are":are,"totsyscos":totsyscos,"uticos":uticos,"totsavin":totsavin})
	.then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
	}, function(error) {
		 console.log('FAILED...', error);
	});	   
}
