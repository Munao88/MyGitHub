'use strict';
var crypto = require('crypto');
console.log("============================Hello world!============================");



var genRandomString = function(length){
	return crypto.randomBytes(Math.ceil(length/2))
		.toString('hex') /** convert to hexadecimal format */
		.slice(0,length); /** return required number of characters */
};


var sha512 = function(password, salt){
	var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
		hash.update(password);
		var value = hash.digest('hex');
		return {
			salt:salt,
			passwordHash:value
		};
};


function saltHashPassword(userpassword) {
	var salt = genRandomString(16); /** Gives us salt of length 16 */
	var passwordData = sha512(userpassword, salt);
	console.log('UserPassword = '+userpassword);
	console.log('Passwordhash = '+passwordData.passwordHash);
	console.log('nSalt = '+passwordData.salt);
	return {
			salt:passwordData.salt,
			passwordHash:passwordData.passwordHash
		};
}

//saltHashPassword('FSa7Yago');
var A = saltHashPassword('SMnAKNn');
//console.log(`=================================================================`+ A.salt);


const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('Password : ', (answer) => {
	var Z = sha512(answer, A.salt);
	//console.log('++++++++++'+A.passwordHash);
	//console.log('++++++++++'+Z.passwordHash);
	if(Z.passwordHash==A.passwordHash){
		console.log('++++++++++++++++++++++login success+++++++++++++++++++++++');
	}
	else{
		console.log('++++++++++++++++++++++login Error+++++++++++++++++++++++++++');
	}

rl.close();
});
