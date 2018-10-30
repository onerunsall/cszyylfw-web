function OPEN_UI_Dialog_iframe(url, title, width, height, id, eventOnClose) {
    width = parseInt(width) + 20;
    height = parseInt(height) + 20;
    if (id == null || id == undefined) {
        id = null;
    }
    if (eventOnClose == null || eventOnClose == undefined) {
        eventOnClose = null;
    }
    try {
        $.jBox("iframe:" + url, {
            title: title,
            width: width,
            height: height,
            buttons: null,
            id: id,
            "closed": eventOnClose
        });
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox("iframe:" + url, {
            title: title,
            width: width,
            height: height,
            buttons: null,
            id: id,
            "closed": eventOnClose
        });
    }
}
function OPEN_UI_Dialog_loading() {
    try {
        $.jBox.tip("正在加载...", "loading");
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox.tip("正在加载...", "loading");
    }
}
function OPEN_UI_Dialog_loading_success() {
    try {
        $.jBox.tip("加载成功...", "success");
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox.tip("加载成功....", "success");
    }
}
function OPEN_UI_Dialog_loading_error() {
    try {
        $.jBox.tip("加载失败...", "error");
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox.tip("加载失败....", "error");
    }
}

function OPEN_UI_Dialog_Error(title, msg) {
    try {
        $.jBox.error(msg, title);
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox.error(msg, title);
    }

}

function OPEN_UI_Dialog_tip(msg, icon) {
    if (arguments.length == 1) {
        try {
            $.jBox.tip(msg);
        } catch (e) {
            OPEN_UI_Dialog_init();
            $.jBox.tip(msg);
        }
    } else if (arguments.length == 2) {
        try {
            $.jBox.tip(msg, icon);
        } catch (e) {
            OPEN_UI_Dialog_init();
            $.jBox.tip(msg, icon);
        }
    }
}

function OPEN_UI_Dialog_confirm(title, msg, submit, width, height, buttons_) {
    if (arguments.length == 3) {
        try {
            $.jBox.confirm(msg, title, submit, {
                icon: 'warning'
            });
        } catch (e) {
            OPEN_UI_Dialog_init();
            $.jBox.confirm(msg, title, submit, {
                icon: 'warning'
            });
        }
        $("div.jbox .jbox-button-panel .jbox-button").each(function () {
            if ($(this).text() != "确定") {
                $(this).css("background-color", "#A8A8A8").css("border", "1px solid #4C4C4C");
            }
        });
    } else if (arguments.length == 5) {
        try {
            $.jBox.confirm(msg, title, submit, {
                width: width,
                height: height,
                icon: 'none'
            });
        } catch (e) {
            OPEN_UI_Dialog_init();
            $.jBox.confirm(msg, title, submit, {
                width: width,
                height: height,
                icon: 'none'
            });
        }
    } else if (arguments.length == 6) {

        try {
            $.jBox.confirm(msg, title, submit, {
                width: width,
                height: height,
                icon: 'none',
                buttons: buttons_
            });
        } catch (e) {
            OPEN_UI_Dialog_init();
            $.jBox.confirm(msg, title, submit, {
                width: width,
                height: height,
                icon: 'none',
                buttons: buttons_
            });
        }
        $("div.jbox .jbox-button-panel").css("text-align", "center");
        $("div.jbox .jbox-title-panel").css("height", "36px");
        $("div.jbox .jbox-container .jbox-close").css("top", "17px");
        $("div.jbox .jbox-title-panel .jbox-title").css("line-height", "36px").css("padding-left", "16px");
        $("div.jbox .jbox-button-panel .jbox-button").each(function () {
            if ($(this).text() != "发送") {
                $(this).css("background-color", "#A8A8A8").css("border", "1px solid #4C4C4C");
            }
        });

    }
}
function OPEN_UI_Dialog_alert(title, msg) {
    try {
        $.jBox.alert(msg, title);
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox.alert(msg, title);
    }
}
function OPEN_UI_Dialog_init() {
    $.include(['/js/jBox/jquery.jBox-2.3.min.js', '/js/jBox/i18n/jquery.jBox-zh-CN.js', '/js/jBox/Skins/Gray/jbox.css']);
}
// 关闭最前面打开的窗口，token可以是指定jBox的ID或布尔值，如果是true显示关闭所有已打开的窗口。
function CLOSE_UI_Dialog(token) {
    try {
        $.jBox.close(token);
    } catch (e) {
        OPEN_UI_Dialog_init();
        $.jBox.close(token);
    }
}

function CLOSE_UI_Dialog_Iframe(token) {
    try {
        window.parent.window.jBox.close(token);
    } catch (e) {
        OPEN_UI_Dialog_init();
        window.parent.window.jBox.close(token);
    }
}

(function ($) {
    $.artJs =
{
    init: function () {
        ///<summary>
        ///初始化弹出层界面，需要引用common.js
        ///</summary>
        /// <param name="callback" type="function">回调函数</param>   

        OPEN_UI_Dialog_init
    },
    openIframe: function (url, title, width, height, id) {
        ///<summary>
        ///弹出Iframe
        ///</summary>
        /// <param name="url" type="String">弹出的Url</param>
        /// <param name="title" type="String">弹出框标题</param>   
        /// <param name="width" type="int">宽度</param>   
        /// <param name="height" type="int">高度</param>  

        OPEN_UI_Dialog_iframe(url, title, width, height, id);

    },
    loading: function () {
        ///<summary>
        ///弹出加载中
        ///</summary>

        OPEN_UI_Dialog_loading();
    },
    loadingSuccess: function () {
        ///<summary>
        ///弹出正确的加载中
        ///</summary>

        OPEN_UI_Dialog_loading_success();
    },
    loadingError: function () {
        ///<summary>
        ///弹出错误的加载中
        ///</summary>

        OPEN_UI_Dialog_loading_error();
    },
    error: function (title, msg) {
        ///<summary>
        ///弹出提示层
        ///</summary>
        /// <param name="title" type="String">标题</param>
        /// <param name="msg" type="String">提示信息</param>   
        OPEN_UI_Dialog_Error(title, msg);
    },
    tip: function (msg, icon) {
        ///<summary>
        ///弹出提示层
        ///</summary>
        /// <param name="msg" type="String">提示信息</param>
        /// <param name="icon" type="String">提示层图标</param>   

        OPEN_UI_Dialog_tip(msg, icon);
    },
    confirm: function (title, msg, submit, width, height, buttons_) {
        ///<summary>
        ///弹出确认框
        ///</summary>       
        /// <param name="title" type="String">确认框标题</param>  
        /// <param name="msg" type="String">确认框消息</param>  
        /// <param name="submit" type="Function">回调函数，点击按钮时回调</param>
        /// <param name="width" type="int">宽度</param>   
        /// <param name="height" type="int">高度</param>     
        /// <param name="buttons_" type="Map">按钮集合，示例{ '恩': true, '好吖': false}</param>    
        OPEN_UI_Dialog_confirm(title, msg, submit, width, height, buttons_);
    },
    alert: function (title, msg) {
        ///<summary>
        ///弹出对话框
        ///</summary>     
        /// <param name="title" type="String">弹出框标题</param>   
        /// <param name="msg" type="String">弹出框消息</param>   

        OPEN_UI_Dialog_alert(title, msg)
    },
    close: function (token) {
        ///<summary>
        ///关闭弹出层，不能关闭Iframe
        ///</summary>

        CLOSE_UI_Dialog(token);
    },
    closeIframe: function (token) {
        ///<summary>
        ///关闭Iframe
        ///</summary>

        CLOSE_UI_Dialog_Iframe(token);
    }

};
})(jQuery);