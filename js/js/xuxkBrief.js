/**
 * Created by xuxk on 2018/7/10.
 */
function loginrefresh(token){
    $.ajax({
        url:"/cszyylfw/useraction/loginrefresh",
        type:'post',
        data:'token='+token,
        success:function(res){
            if(res.code==0){
                $('.exit span:first-child').html(res.data.realname+' 你好！')
            }
        }
    })
}
function getout(token){
    $.ajax({
        url:'/cszyylfw/useraction/logout',
        data:'token='+token,
        type:"post",
        success:function(res){
            if(res.code==0){
                location.href='xs_index.html';
                localStorage.removeItem('token')

            }
        }
    });
}
function getoutjs(token){
    $.ajax({
        url:'/cszyylfw/useraction/logout',
        data:'token='+token,
        type:"post",
        success:function(res){
            if(res.code==0){
                location.href='js_index.html';
                localStorage.removeItem('token')
            }
        }
    });
}
function getoutgly(token){
    $.ajax({
        url:'/cszyylfw/useraction/logout',
        data:'token='+token,
        type:"post",
        success:function(res){
            if(res.code==0){
                location.href='gly_index.html';
                localStorage.removeItem('token')
            }
        }
    });
}
//上传图片 ，不定url
var result = '';
jQuery.uploadImgUrl = function (idString, url) {
    var fd = new FormData(document.getElementById(idString));
    $.ajax({
        url: url,
        type: 'POST',
        data: fd,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {

            if (data.code == 0) {
                result = data.data.url;
            } else {
                alert(data.codeMsg)
            }
        },
        error: function (xhr, msg, reasonString) {
            alert('请求错误，请稍后再试...');
            console.log('error回调函数...响应完成但存在问题');
            console.log(arguments);
        }
    });
    return result;
};

function scroll(){
    //$(window).scroll(function(event){
    //    $(window).scrollTop()
    //    if($(window).scrollTop()>70){
    //        $('.siteReportTop').addClass('fixedPos')
    //        $(".siteReportTop").next().addClass('marginTop174')
    //    }else{
    //        $('.siteReportTop').removeClass('fixedPos')
    //        $(".siteReportTop").next().removeClass('marginTop174')
    //    }
    //});
}

//另存为代码
function fake_click(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
    );
    obj.dispatchEvent(ev);
}

function export_raw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;

    var export_blob = new Blob([data]);

    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fake_click(save_link);
}


//弹窗

function xuxkconfirm(chfa_id,leader_if){
    console.log(leader_if)
    $('body').append('<div class="popopowindow"> <div class="popBackground"> </div> <div class="popAddMoneyBox"> <div class="popAddMoneyTop"> <span class="lf">添加成员</span> <span class="deleteIcon rt" onclick="delThis()"></span> </div> <div class="popAddMoneyBottom"> ' +
    '<div> <span>姓名</span> <input class="popname" type="text"/> </div> <div> <span>单位</span> <input class="popdanwei" type="text"/> </div> <div> <span>职务</span> <input class="popzhiwu" type="text"/> </div> <div> <span>项目分工</span> <input class="popfengong" type="text"/> </div> <div> <span>联系方式</span> <input class="linkNum" type="number"/> </div>' +
    ' <button class="popAddMoneyBoxBtn" onclick="saveThis('+chfa_id+","+leader_if+')"  leader_if="'+leader_if+'" chfa_id="'+chfa_id+'">保存</button> </div> </div> </div>')
    var popscrollwidth=$(window).width();
    var popscrollheight=$(window).height();
    console.log(popscrollwidth,popscrollheight);
    $(".popAddMoneyBox").css('left',(popscrollwidth/2-335)+"px").css('top',(popscrollheight/2-220)+"px");
}
function delThis(){
    $(".popopowindow").remove()
}


function saveThis(chfa_id,leader_if){

    console.log(leader_if,chfa_id)
    var popname=$('.popname').val();
    var popcompany=$('.popdanwei').val();
    var poppost=$('.popzhiwu').val();
    var popfengong=$('.popfengong').val();
    var poptel=$('.linkNum').val();
    console.log(popname,popcompany,poppost,popfengong,poptel)
    if(popname==''||popcompany==''||poppost==''||popfengong==''||poptel==''){
        alert('请填写完整表格')
    }else{
        $.ajax({
            url: "/cszyylfw/xs/xm/chfa/addmember",
            type: 'post',
            data: 'token=' + token + '&chfa_id=' + chfa_id + '&leader_if=' + leader_if + "&name=" + popname +
            "&company=" + popcompany + "&post=" + poppost + "&fengong=" + popfengong + "&tel=" + poptel,
            success: function (res) {
                if (res.code == 0) {
                    if(leader_if==1){
                        $('.leadone').prepend('<tr class="tab5">'+
                        '<td>'+popname+'</td>'+
                        '<td>'+popcompany+'</td>'+
                        '<td>'+poppost+'</td>'+
                        '<td>'+popfengong+'</td>'+
                        '<td>'+poptel+'</td>'+
                        '<td><span class="look">查看</span><span class="editor">编辑</span><span class="delete">删除</span></td>'+
                        '</tr>')
                    }else{
                        $('.leadtwo').prepend('<tr class="tab5">'+
                        '<td>'+popname+'</td>'+
                        '<td>'+popcompany+'</td>'+
                        '<td>'+poppost+'</td>'+
                        '<td>'+popfengong+'</td>'+
                        '<td>'+poptel+'</td>'+
                        '<td><span class="look">查看</span><span class="editor">编辑</span><span class="delete">删除</span></td>'+
                        '</tr>')
                    }
                    $('.popopowindow').remove()
                } else if (res.code == 20) {
                    alert('登陆超时，请重新登录！');
                    setTimeout(function () {
                        location.href = 'js_index.html'
                    }, 1000)

                } else {
                    alert(res.codeMsg)
                }
            }
        })
    }

}
//获取url参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}

function onlyNumber(obj){

    //得到第一个字符是否为负号
    var t = obj.value.charAt(0);
    //先把非数字的都替换掉，除了数字和.和-号
    obj.value = obj.value.replace(/[^\d\.\-]/g,'');
    //前两位不能是0加数字
    obj.value = obj.value.replace(/^0\d[0-9]*/g,'');
    //必须保证第一个为数字而不是.
    obj.value = obj.value.replace(/^\./g,'');
    //保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g,'.');
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
    //如果第一位是负号，则允许添加
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
    if(t == '-'){
        return;
    }

}