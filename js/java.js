/*Object literal*/

var user={
	name: 'Aayush Rajput',
	age:19,
	account:
	{
		email: 'araraayushraput1998@gmail.com',
		password: 551997
	},
    details: function(){
    	return this.name+" "+this.age;
    }
}
console.log(user.details());

/*Object Constructor*/
 var me=new Object();
 me.firstName='Aayush';
 me.lastName="Rajput";
 me.age="19"
 describe = function(){
 	return me.firstName+" "+me.lastName;
 }
 console.log(describe());

 /*Constructor Pattern*/
function name(firstName, lastName, Age){    //this is basically a prototybe that works in place of Object keyword which already has predefined attributtes we jus need to define them at the creation of the object.
this.firstName= firstName;
this.lastName= lastName;
this.describe=function(){
	return firstName;
}
}
var aayush=new name('aaysuh','rajput',19);
console.log(aayush.describe());
/* variable Array*/
 var Name=[
 {
 	name: 'Aayush Rajput',
 	age: 19
 },
 {
 	name:'Mansa Singh',
 	age:20
 }]
 console.log(Name[1].name);
$(document).ready(function(){
    $(window).scroll(function(){
         var newScroll = document.body.scrollTop;
        console.log(newScroll);
    });
});