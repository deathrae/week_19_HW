console.log("Your JS file is loaded correctly!");

$(".hoverMe").mouseenter(function myFunction() {
  $(this).css("background-color", "pink");
});

$(".hoverMe").mouseleave(function myFunction() {
  $(this).css("background-color", "black");
});
$(".hoverMe").on("click", function myFunction(){
  $(this).css("background-color", "gray");
})