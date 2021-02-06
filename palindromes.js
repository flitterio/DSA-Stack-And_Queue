function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let letters = [];
    let rword = '';
    for(let i=0; i<s.length; i++){
        letters.push(s[i]);
    }
    for(let i = 0; i< s.length; i++){
        rword+=letters.pop();
    }
    if(rword === s){
        return true;
    }
    else {
        return false;
    }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
