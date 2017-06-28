function openLogin(type) {
    //弹出层效果
    var slt = $("#div_loginreg_main");
    slt.ui("popDiv", {
        backgroundColor: "#000000",
        close: "a.div_loginreg_close",
        opacity: 0.2
    });
    if (slt.data("loaded")) {
        return;
    }
    slt.data("loaded", true);
    var slt = $("#div_loginreg_main");
    if (!slt.data("isResize")) {
        slt.data("isResize", true);
        $(window).resize(function() {
            var checkSlt = $("#div_loginreg_main,#div_loginreg_main2,#div_loginreg_main3,#div_loginreg_main4").filter(":visible");
            checkSlt.ui("popDiv", {
                backgroundColor: "#000000",
                close: "a.div_loginreg_close",
                opacity: 0.2
            });
        });
    }
}
