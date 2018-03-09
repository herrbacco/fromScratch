
//make sure DOM is loaded before adding any Event Listeners
document.addEventListener('DOMContentLoaded', function(){

  $(function () {
    $("#tabs").tabs();
  });

  $("#accordion").accordion({collapsible:true,heightStyle: "content"});


});
