// before the document is ready
// define the sayHi function
var sayHi = function(){
  console.log("Hi")
}


// Do something when the document is ready
// select my form
$(document).ready(function() {
 $("form#counter").submit(function(event){
   var countTo =  $("input#countTo").val();
   console.log(countTo);
   var countBy = $("input#countBy").val();
   console.log(countBy);
   event.preventDefault()
   sayHi();

   if(typeof parseInt(countTo) === "string"){
     console.log("True")
   }else if(countTo==="11"){
     console.log("ulijuaje");
   }else {
     console.log("lie");
   }
  for (var i = i=0; i <= parseInt(countTo); i++)
  console.log(i);

 })
});
