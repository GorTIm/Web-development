$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//add in event object
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    //prevent event bubbling
    event.stopPropagation();

});


$("input[type=text]").keypress(function(e) {
    if(e.which===13){
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " + todoText +"</li>");
    }
    
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});