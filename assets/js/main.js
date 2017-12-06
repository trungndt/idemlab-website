$('.toggled .child-menu').hide();

$('.toggled').click(function(e){
    e.preventDefault();
    var $this = $(this).parent().find('.child-menu');
    $(".toggled .child-menu").show();
    $this.toggle();
});