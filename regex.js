function regexVar(){
	var re = /^([aeiou]).*\1$/;

	return re;
}

    const re = regexVar();
    const s1 = "bcd";
    const s2 = "abcd";
    const s3 = "abcdo";
    const s4 = "abca";
    const s5 = "abda";
    
    console.log(re.test(s1));
    console.log(re.test(s2));
    console.log(re.test(s3));
    console.log(re.test(s4));
    console.log(re.test(s5));
