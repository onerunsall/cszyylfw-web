/**
 * Created by xuxk on 2018/7/12.
 */
$('.edit').click(function () {
    $('.btncnm').css('display','block');
    $('.downloads').css('display', 'none');
    $(".delete").css('display', 'inline-block')
    $(".editor").css('display', 'inline-block')
    $('.eye').css('display', 'none');
    $(".del").css('display', 'block')
    $('.addoldAll').css('display', 'block');
    $('.edit').css('display', 'none');
    $(".editover").css('display', 'block');
    $('.briefnameAll').css('display', 'none');
    $(".noEdit").css('display', 'none');
    $(".edit2").css('display', 'block');
    $('.tab4').parent().css('display', '');
    $('.tab3').parent().css('display', 'none');
    if($('.briefnameAll').html()){
        $(".oldman").val($('.briefnameAll').html())
    }
    $('.supply').css('background', '#ccc').css('color', '#025aa1').attr('disabled', true)
});
$('.editover').click(function () {
    if($('.oldman').val()==''||$('.oldman').val()==null||$('.oldman').val()==undefined||$('.oldman').val()=='undefinied'||$('.oldman').val()=='null'){
            error('请选择老年人')
    }else{
        $('.downloads').css('display', 'block');
        $(".delete").css('display', 'none')
        $(".editor").css('display', 'none')
        $('.eye').css('display', 'block');
        $(".del").css('display', 'none');
        $('.editover').css('display', 'none');
        $(".edit").css('display', 'block');
        $('.addoldAll').css('display', 'none');
        if(!$(".oldman").val()){
            $('.no1').css('display', 'block');
        }else{
            $('.briefnameAll').css('display', 'block');
        }
        $('.tab4').parent().css('display', 'none');
        $('.tab3').parent().css('display', '');
        $(".edit2").css('display', 'none');
        $('.supply').attr('disabled', false).css('background', '#fff').css('color', '#02569c')
    }


});



