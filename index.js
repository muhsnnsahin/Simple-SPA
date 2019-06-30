$(document).ready(function () {
   $(".table-edit-button").on("click", function () {
      alert("Row editing not possible now! Sorry!");
   });

   $(".nav-bar-node").on("click", function () {
       var page = $(this).find("a").attr("href");
       page = page.substring(1, page.length);

       $.get( "pages/" + page + ".html", function( data ) {
           $("#master-page").html(data);
       });
   });

   $(".nav-bar-node").find('[href="#home"]').click();
});