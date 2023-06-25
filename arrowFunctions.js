//normal function
hello = function(){
    return "Hello World!";
}

//with arrow function
hi  = () => {
    return "Hi World!";
}
/*It gets shorter! If the function has only one statement, 
and the statement returns a value, 
you can remove the brackets and the return keyword:
*/
hey = () => "Hey World!";

//parameters are passed like so..
howdy = (name) => "Howdy " + name;

//if there's  only one parameters, you can omit the () entirely!
konnichiwa = name => "Konnichiwa" + name;
