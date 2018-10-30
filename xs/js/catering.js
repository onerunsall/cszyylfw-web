/**
 * Created by xuxk on 2018/7/12.
 */
$('.edit').click(function () {
    $('.btncnm').css('display','block');
    $('.planedit12').css('display', 'none');
    $('.jbzsinput').css('display', 'inline-block').val( $('.jbzsSpan1').html());
    $('.jbzsSpan1').css('display', 'none');
    $('.leadthree span').css('display','inline-block');
    $('.eye').css('display', 'none');
    console.log(456456)
    $(".del").css('display', 'block')
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
    if ($(".nameover").html().length > 0) {
        $(".nameover").css('display', 'none');
        $('.name').val($(".nameover").html()).css('display', 'block');
    }
    if ($(".startTimeNext").html() != "——") {
        $('#ContentPlaceHolder1_txtOne').val($(".startTimeNext").html())
    }
    if ($(".endTimeNext").html() != "——") {
        $('#ContentPlaceHolder1_txtTwo').val($(".endTimeNext").html())
    }



});
$('.editover').click(function () {
    $('.jbzsinput').css('display', 'none')
    $('.jbzsSpan1').css('display', 'inline-block').html( $('.jbzsinput').val());
    $('.leadthree span').css('display','none')
    $('.eye').css('display', 'block');
    $(".del").css('display', 'none');
    $('.supply').attr('disabled', false).css('background', '#fff').css('color', '#02569c')
    $('.editover').css('display', 'none');
    $(".edit").css('display', 'block');
    $('.startTimeBox').css('display', 'none');
    $('.endTimeBox').css('display', 'none');
    if ($(".name").val().length > 0) {
        $('.nameover').html($(".name").val()).css('display', 'block');
    }
    $(".edit2").css('display', 'none');

    if (!$(".name").val()) {
        $('.no1').css('display', 'block')
    }


    $('.tab3').parent().css('display', '');
    $('.tab4').parent().css('display', 'none');

    if ($('.wendangBox').children().length==0 && $('.wendangBox').children().length==0){
        $('.planedit12').css('display', 'block');
        //$(".planedit ").css('display', 'none');
    }
    var publish_time_start = new Date($('#ContentPlaceHolder1_txtOne').val().replace('.', '-')).getTime();
    var publish_time_end = new Date($('#ContentPlaceHolder1_txtTwo').val().replace('.', '-')).getTime();
    if (!$('#ContentPlaceHolder1_txtOne').val() && $('#ContentPlaceHolder1_txtTwo').val()) {
        alert('请选择开始和截止时间')
    } else if ($('#ContentPlaceHolder1_txtOne').val() && !$('#ContentPlaceHolder1_txtTwo').val()) {
        alert('请选择开始和截止时间')
    } else if (publish_time_start > publish_time_end) {
        alert('开始需要小于截止时间')
    } else {
        if (!$('#ContentPlaceHolder1_txtOne').val() && !$('#ContentPlaceHolder1_txtTwo').val()) {
            $(".startTimeNext").html("——").css('display', 'inline-block');
            $(".endTimeNext").html("——").css('display', 'inline-block');
        } else {
            $(".startTimeNext").html($('#ContentPlaceHolder1_txtOne').val()).css('display', 'inline-block').css('color', '#000');
            $(".endTimeNext").html($('#ContentPlaceHolder1_txtTwo').val()).css('display', 'inline-block').css('color', '#000');
        }
    }

});



