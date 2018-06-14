	
	var nums = [1,2,3,4,5,6,7,8,9,10];

	nums.sort(function (a, b) {  return a - b;  });
		console.log(nums);
	
    var res = nums[nums.length-1];
    console.log(res);
    
    var i = nums.length - 2;
    console.log(nums[i]);
    
    while(res == nums[i]){
        i--; 
        /**res = nums[i];**/
        console.log(nums[i]);
    }
    console.log("=>"+nums[i]); 
    