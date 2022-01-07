$(document).ready(function(){
    $('i').hover(
        function(){$(this).addClass('fa-3x');},
        function(){$(this).removeClass('fa-3x');}
    );

    $('.fa-book').click(() => { $('.profile-card').css("z-index", "-1"); })
    $('.close-button').click(() => { $('.profile-card').css("z-index", "1"); })
});