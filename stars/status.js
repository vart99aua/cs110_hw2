 debugger; 
 
 const space = function (spc){
 	if (spc===0){
 		return "";
 }
	return " " + space (spc-1);
};
const star = function (str){
	if (str===0){
		return "";
	}
	
	return "*" + star(str-1)
};
const run = function (n,spc,str){
 	if (n===0){
 		return " ";
 	}
 	 console.log(space(spc)+star(str))
 	run(n-1,spc-1,str+2);
}
 	const run2 = function(n)
 	{
 		run(n,n-1,1)
 	};
 	run2(5); 
// const space = function (spc){
//  	if (spc==0){
//  		return "";
//  	}
//  	return " " + space (spc-1);
//  };
//  const stars = function (star){
//  	if (star==0){
//  		return"";
//  	}
//  	return * + stars (star-1);
//  };
//  const join = function (n; spc; star){
//  	if (n==0){
//  		return "";
//  	}
//  	console.log(space(spc) + stars(star))
//  	join(n-1; spc-2; star+2);
//  }
//  const join2 = function(n)
//  {
//  	join(n; n-1; 1)
//  };
//  const b = join();
