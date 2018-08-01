/*function changesize() {
 var e = document.getElementById("textSize");
  var r= e.options[e.selectedIndex].value;
  var x=document.getElementById("texta");
    x.style.fontSize=r;   
}
/*************************************************/
$("#textSize").change(function(){
  var size=$("#textSize").val();
  $("#texta").css("fontSize",size)
});
/*************************************************/
/*function changefond() {
   	var a=document.getElementById("textfond");
  var z= a.options[a.selectedIndex].value;
  document.getElementById("texta").style.fontFamily=z;
}*/
/*************************************************/
$("#textfond").change(function(){
var x=$("#textfond").val();
$("#texta").css("fontFamily",x)
});
/*************************************************/

/*
function changecolor() {
	var m=document.getElementById("co").value;
  document.getElementById("texta").style.color=m;
}*/
/*************************************************/
$("#co").change(function(){
var m=$("#co").val();
$("#texta").css("color",m);
});
/*************************************************/
/*function changefondweightbold() {
    var element = document.getElementById("texta");
    element.classList.toggle("boldd");
}*/
/*************************************************/
$("#b1").click(function(){
 $("#texta").css("font-weight","bold");
});
/*************************************************/
/*function changefondweightitalic() {
    var element = document.getElementById("texta");
    element.classList.toggle("italicc");
}*/
/*************************************************/
$("#b2").click(function(){
  $("#texta").css("font-style","italic");
});
/*************************************************/
/*function changefondweightunderlined() {
    var element = document.getElementById("texta");
    element.classList.toggle("underlinedd");
}*/
/*************************************************/
$("#b3").click(function(){
  $("#texta").css("text-decoration","underline");
});
/*************************************************/
/*function centreee() {
    var element = document.getElementById("texta");
    element.classList.toggle("centred");

}*/

/*************************************************/
$("#b4").click(function(){
  $("#texta").css("text-align","center");
});



