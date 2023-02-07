console.log("Your JS file is loaded correctly!");

hoverMe.addEventListener("mouseenter", myFunction)

$(".hoverMe").mouseenter(function myFunction() {
  $(this).css("background-color", "pink");
});

$(".hoverMe").mouseleave(function myFunction() {
  $(this).css("background-color", "dark-gray");
});
$(".hoverMe").on("click", function myFunction(){
  $(this).css("background-color", "gray");
})