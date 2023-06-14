// complete the given function

function palindrome(str){
	let ans = "";
	for(let i=0;i<str.length;i++){
		if(str.charAt(i) != " "){
			ans+= str.charAt(i);
		}
	}
	let start = 0, end = str.length-1;
	while(start < end){
		if(ans.charAt(start) !== ans.charAt(end)){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
