function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 
var ans=0;

function add(x,y)

{

return x+y;

}

function subtract(x,y)

{

return x-y;

}

function multiply(x,y)

{

return x*y;

}

function divide(x,y)

{

return x/y;

}
function solve() 
{ 
    var x = document.getElementById("result").value 
    var y = eval(x) 
    document.getElementById("result").value = y 
}
function clr()

{

document.getElementById("result").value="";

}
function validation()
{
	var a=document.form.name.value;
	if (a=="")
		{
		alert("Please Enter Your Name");
		document.form.name.focus();
		return false;
		}
	if ((a.length<=1) || (!isNaN(a)))
		{
		alert("First Character Should Be An Alphabate");
		document.form.name.select();
		return false;
		}
	if ((a.length < 5) || (a.length > 15))
	{
		alert("Your Character must be 5 to 15 Character");
		document.form.name.select();
		return false;
	}
	var email = document.form.Email;
	if (email.value == "")
		{
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
		}
	if (email.value.indexOf("@", 0) < 0)
		{
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
		}
	if (email.value.indexOf(".", 0) < 0)
		{
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	var p = document.form.phone.value;
	if(p=="")
	{
	alert("please Enter the Contact Number");
	document.form.phone.focus();
	return false;
	}
	if (p.length < 10)
	{
		alert("Your Number Must Be 10 digits");
		document.form.name.select();
		return false;
	}
	if(isNaN(p))
	{
	alert("Enter the valid Mobile Number(Like : 9566137117)");
	document.form.phone.focus();
	return false;
	}
	}
function palindrome()
{
	var x = document.getElementById("a").value;
	var y = "";
	for(var i=x.length-1;i>=0;i--)
		{
		y=y+x[i];
		}
	if(x==y)
		alert("This is A Palindrome");
	else
		alert("This Is Not A Palindrome")
}
function anagram(str1,str2) 
{
	    if(str1.length != str2.length) return false;
	    var lookup = {}
	    for(var i=0;i< str1.length;i++)
	    	{
	    	var char = str1[i]
	    	lookup[char] ? lookup[char]+=1 : lookup[char] = 1;	    		
	    	}
	    for(var i=0;i<str2.length;i++)
	    	{
	    	var char = str2[i]
	    	if(!lookup[char])
	    		{
	    		alert("Not An Anagram");
	    		}
	    	else
	    		{
	    		lookup[char] -=1
	    		}
	    	}
	    alert("Correct...Anagram");
}
const result_div = document.querySelector(".result");
const human_div = document.getElementById("h");
const cocroj_div = document.getElementById("c");
const nbomb_div = document.getElementById("n");

human_div.addEventListener('click',function() {
	 console.log("Hey you click on Human");
 })