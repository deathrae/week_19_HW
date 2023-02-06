console.log("Your JS file is loaded correctly!");

$(".hoverMe").mouseenter(function() {
  alert("Hello World");
});

$(".hoverMe").mouseleave(function() {
  alert("Hello World");
});
$(".hoverMe").on("click", function(){
  $(this).hide();
})