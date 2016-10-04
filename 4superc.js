// Stringy
function stringy( size ) {
	number = "";
	for(var i = 1; i <= size; i++) {		 //
    number += i%2;
	}
	return number;
}

// Reverse Numbers
function reverseNumbers(arr) {
 var main = (""+arr).split('');
 var reverse = [];
 for (var i = main.length - 1; i >= 0; i--) {		//
   reverse[i] = parseInt(main.shift(),10);
 }
 return reverse;
}

console.log(reverseNumbers(348597));

		//version2 of reverse interger comment out

						// function reverse_a_number(n)  
						// {  
						//     n = n + "";  
						//     return n.split("").reverse().join("");  
						// }  
						// console.log(reverse_a_number(345678));

// Fibonacci Sequence
function fibonacci( x ) {
	var current = 0;
	var last = 1;
	for(var i=0;i<x;i++){
		var temp = last;
		last = current;
		current = last + temp;
	}
	return current;
}
			//version2 of fibonacci is comment out

					// var fibonacci_series = function (n)   
					// {  
					//   if (n===1)   
					//   {  
					//     return [0, 1];  
					//   }   
					//   else   
					//   {  
					//     var s = fibonacci_series(n - 1);  
					//     s.push(s[s.length - 1] + s[s.length - 2]);  
					//     return s;  
					//   }  
					// };  
  					// console.log(fibonacci_series(8));

// Coupon Expiration
var today = "October 07, 2016";		//set the expire date to help us run the coupon/check code
function checkCoupon( coupon ) {			//verity the date- use return coupon code
	return coupon instanceof coupon && verifyDate( coupon.expiration, today ) && coupon.code.length >= 4 && coupon.code.length <= 8;
}
function verifyDate( expiration, comparison ) {				//once the code above goes through compare date of expire/comparison
	return new Date(expiration) >= new Date(comparison);
}
// Coupon Object
//after all steps are done above, use this. to call in the function "code,expiration"
function Coupon( code, expiration ) {
	this.code = code;			
	this.expiration = expiration;
}




// Email Validation 
//Bonus question
function validEmail( email ) {			//code below to check characters such as uppercase/lowercase and numbers and lenght
	var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email);		//to test email if it is valid
}