$(document).ready(function(){
    $('i').hover(
        function(){$(this).addClass('fa-3x');},
        function(){$(this).removeClass('fa-3x');}
    );

    $('.fa-book').click(() => { $('.profile-card').css("display", "none"); })
    $('#ba1,#bar2').click(() => { $('.profile-card').css("display", "block"); })
});