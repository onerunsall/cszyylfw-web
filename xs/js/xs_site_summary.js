/**
 * Created by xuxk on 2018/7/12.
 */
$('.edit').click(function () {
    $('.btncnm').css('display','block');
    $('.tab8 span').css('display', 'inline-block')
    $('.font16').css('display', 'none');
    $('.topInput').css('display', 'inline-block').prev().css('display', 'none');
    if( $('.topInput1').prev().html()!='——'){
        $('.topInput1').val($('.topInput1').prev().html())
    }
    if( $('.topInput2').prev().html()!='——'){
        $('.topInput2').val($('.topInput2').prev().html())
    }
    if( $('.topInput3').prev().html()!='——'){
        $('.topInput3').val($('.topInput3').prev().html())
    }
    $('.leadthree span').css('display','inline-block');
    $('.eye').css('display', 'none');
    $(".del").css('display', 'block');
    $(".planspan2").css('display', 'block');
    $(".planspan1").css('display', 'block');
    $('.supply').css('background', '#ccc').css('color', '#025aa1').attr('disabled', true);
    $('.edit').css('display', 'none');
    $(".editover").css('display', 'block');
    $(".noEdit").css('display', 'none');
    $(".edit2").css('display', 'block');
    $('.startTimeBox').css('display', 'inline-block');
    $('.endTimeBox').css('display', 'inline-block');
    $('.startTime').css('display', 'block');
    $('.endTime').css('display', 'block');
    $('.startTime span').css('display', 'none');
    $('.endTime span').css('display', 'none');
    $('.tab4').parent().css('display', '');
    $('.tab3').parent().css('display', 'none');
    $('.pinggufangfa').css('display', 'block');
});
$('.editover').click(function () {
    if($('.wendangBox').children().length==0){
        $('.no2').css('display','inline-block');
        $('.no2').parent().find('.lineBottom').css('display','none')
    }
    $('.planspan2').css('display', 'none');
    $('.planspan3').css('display', 'none');
    $('.topInput').css('display', '').prev().css('display', 'none');
    if($('.topInput1').val().length>0){
        $('.topInput1').prev().html($('.topInput1').val()).css('display', 'inline-block');
    }else{
        $('.topInput1').prev().html('——').css('display', 'inline-block');
    }
    if($('.topInput2').val().length>0){
        $('.topInput2').prev().html($('.topInput2').val()).css('display', 'inline-block');
    }else{
        $('.topInput2').prev().html('——').css('display', 'inline-block');
    }
    if($('.topInput3').val().length>0){
        $('.topInput3').prev().html($('.topInput3').val()).css('display', 'inline-block');
    }else{
        $('.topInput3').prev().html('——').css('display', 'inline-block');
    }

    $('.tab3').parent().css('display', '');
    $('.tab4').parent().css('display', 'none');
    $(".edit2").css('display', 'none');
    $('.editover').css('display', 'none');
    $(".edit").css('display', 'block');





});



