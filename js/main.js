

var solarHours = [3.77, 3.57, 3.70, 3.60, 3.98, 3.96,3.55, 3.50, 3.52];

var utilityValues = [[0.135,11.00], [0.119, 14.00], [0.130, 13.00], [0.105, 10.50], [0.12, 14.00]];
var sysiz =	document.getElementById("syssize");
var	noofsolarpanel = document.getElementById("noofsolarpanels");
var	are = document.getElementById("area");
var totsyscos = document.getElementById("totsyscost");
var	uticos = document.getElementById("uticost");
var	totsavin = document.getElementById("totsaving");

sysiz.value = "0.00";
noofsolarpanel.value = "0.00" ;
are.value = "0.00";
totsyscos.value = "0.00";
uticos.value = "0.00";
totsavin.value = "0.00";

function solarTotal(){
	var shindex = document.getElementById("city").selectedIndex;
	var sh = solarHours[shindex];

	var utindex = document.getElementById("utility").selectedIndex;
  	var ut = utilityValues[utindex];
	if(document.getElementById("utilityBill").value==''){
		return 0;
	}
	
	ub = parseFloat(document.getElementById("utilityBill").value);

	monthlyUsage = ((ub-ut[1])/ut[0]).toFixed(2);
	
	var annual_srec = (((monthlyUsage*12)/1000)*6).toFixed(3);
	var total_srec = (annual_srec*10).toFixed(2);

	//OUTPUTS
	var sys_size = ((monthlyUsage * 12)/(365*sh)).toFixed(2);
	
	var incentive =0;
	if(shindex == 4 || shindex ==5){
		incentive = ((monthlyUsage * 12 * 500)/(365*sh)).toFixed(2);
	}
	var total = (parseFloat(total_srec) + parseFloat(incentive)).toFixed(2);
	//OUTPUTS
	var no_of_panels = (((monthlyUsage * 12)/(365*sh)*1000)/350).toFixed(2);
	//OUTPUTS
	var sq_foot = ((((monthlyUsage * 12)/(365*sh)*1000)/350)*15).toFixed(2);

	
	var sys_price = (((monthlyUsage * 12)/(365*sh))*3215).toFixed(2);
	
	var state_tax=0;
	if(shindex == 4 || shindex ==5){
		state_tax = (0.0423 * ((monthlyUsage * 12)/(365*sh))*3215 ).toFixed(2);
	}else if(shindex ==7){
		state_tax = (0.06 * ((monthlyUsage * 12)/(365*sh))*3215 ).toFixed(2);
	}
	
	var sys_price_after = (((((monthlyUsage * 12)/(365*sh))*3215)*0.7)).toFixed(2);

	

	//OUTPUT
	var price_after_all = sys_price_after - total;
	console.log(total)
	//OUTPUT
	var ut_price = ((ub*12)*(Math.pow(1.03, 25)-1)/0.03).toFixed(2);

	//OUTPUT
	var total_saving = (ut_price - price_after_all).toFixed(2);

		sysiz.value = sys_size;
		noofsolarpanel.value = no_of_panels;
		are.value = sq_foot;
		totsyscos.value = price_after_all;
		uticos.value = ut_price;
		totsavin.value = total_saving;
}

