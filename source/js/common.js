/**
 * Created by Nihrom on 22.06.2017.
 */
$(document).ready(function() {

    
    $(".fancybox").fancybox();

    AOS.init({
        offset: 240,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once:true,
    });

    $(".player").mb_YTPlayer();
});