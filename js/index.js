$(".topbom")
    .find("ul")
    .find("li")
    .on("mouseenter", function (e) {
        var a = $(e.target.offsetLeft);
        //通过事件源对象获取当前ul坐标位置的值
        $(".jqone")
            .css({ left: a[0] + "px" });

    })
$(".topbom")
    .find("ul")
    .find("li")
    .on("mouseleave", function (e) {
        $(".jqone").css({ left: "135px" });
        //
    })



function bannerlunb() {
    var index = 1;
    //初始化索引值
    var key = true;
    //初始化值，锁，开关
    var len = $(".banner")
        .find("li")
        .eq()
        .prevObject.length;
        //获取轮播图长度
    var wid = $(".banner")
        .find("li")
        .find("a")
        .find("img")[0].clientWidth;
        //获取整屏宽度
        setInterval(function(){
            if(index>=4){
                index = 0 ;
            }
            $(".banner")
            .find("ul")
            .css({ left: "-" + wid * index + "px" });
            index ++;
        },5000)
    $(".banner")
        .find(".anrg")//右按钮
        .on("click", function () {
            //点击事件
            if (key == false) {
                index = 0;
                $(".banner")
                    .find("ul")
                    .css({ left: "-" + wid * index + "px" });
                key = true;
                //判断初始化值
            } else if (index >= len) {
                index = 0;
                $(".banner")
                    .find("ul")
                    .css({ left: "-" + wid * index + "px" });
                    //越值判断
            } else if (index == 0) {
                index++;
                $(".banner")
                    .find("ul")
                    .css({ left: "-" + wid * index + "px" });
                    //越值判断
            } else {
                $(".banner")
                    .find("ul")
                    .css({ left: "-" + wid * index + "px" });
                index++;
            }
        })
    $(".banner")
        .find(".anlf")//左按钮
        .on("click", function () {
            if (key) {
                index = len - 1;
                $(".banner")
                    .find("ul")
                    .css({ left: "-" + wid * index + "px" });
                key = false;
            } else {
                index--;
                $(".banner")
                    .find("ul")
                    .css({ left: "-" + wid * index + "px" });
                if (index <= 0) {
                    index = len
                }
            }
        })
}
bannerlunb()

function splunb() {
    var index = 1;
    var key = true;
    var len = $(".newbox")
        .find(".newbb")
        .eq().prevObject.length;
    var wid = $(".newbb")
        .find("li").prevObject[0].clientWidth;
    $(".cpbox")
        .find(".anlf")
        .on("click", function () {
            if (key == false) {
                index = 0;
                $(".newbox")
                    .css({ left: "-" + wid * index + "px" });
                key = true;
            } else if (index >= len) {
                index = 0;
                $(".newbox")
                    .css({ left: "-" + wid * index + "px" });
            } else if (index == 0) {
                index++;
                $(".newbox")
                    .css({ left: "-" + wid * index + "px" });
            } else {
                $(".newbox")
                    .css({ left: "-" + wid * index + "px" });
                index++;
            }
        })
    $(".cpbox")
        .find(".anrg")
        .on("click", function () {
            if (key) {
                index = len - 1;
                $(".newbox")
                    .css({ left: "-" + wid * index + "px" });
                key = false;
            } else {
                index--;
                $(".newbox")
                    .css({ left: "-" + wid * index + "px" });
                if (index <= 0) {
                    index = len
                }
            }
        })
}
splunb()

