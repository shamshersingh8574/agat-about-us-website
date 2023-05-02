$(document).ready(function () {
    $(document).on('click', '.navabar-icons', function () {
        $("nav.toggle-custom").toggleClass("main");
        $(".navabar-icons").toggleClass("navbarIcon-1");
        $(".navabar-icons2").toggleClass("navbarIcon-2");
        $("body").addClass('oerflow-hidden');
    });
    $(document).on('click', '.navabar-icons2 , .navabar a' , function () {
        $("nav.toggle-custom").toggleClass("main");
        $(".navabar-icons").toggleClass("navbarIcon-1");
        $(".navabar-icons2").toggleClass("navbarIcon-2");
        $("body").removeClass('oerflow-hidden');
    })   
});