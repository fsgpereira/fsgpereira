$(function() {
    $('.navigation_mobile_obj').on('click', function () {
        //Nota: dentro dos toggleClass, não precisa informar o "."
        // pois a função ja sabe que vai entrar uma classe no valor
        $('.navigation_mobile_sub').toggleClass('ds_none');
        $(this).toggleClass('navigation_mobile_obj_active');
    });
});